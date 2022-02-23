import { FormControl, FormHelperText, InputLabel, Select } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

interface ISelectFieldProps {
    name: string;
    label: string;
    errorobj: {
        [x: string]: any;
    };
    children: React.ReactNode;
}

function SelectField(props: ISelectFieldProps) {
    const { control } = useFormContext();
    const { name, label, errorobj, children } = props;
    const labelId: string = `${name}-label`;

    let isError: boolean = false;
    let errorMessage: string = "";
    if (errorobj && errorobj.hasOwnProperty(name)) {
        isError = true;
        errorMessage = errorobj[name].message;
    }

    return (
        <FormControl fullWidth sx={{ mb: 2 }} error={isError}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Controller
                control={control}
                name={name}
                defaultValue={null}
                render={({ field: { onChange, value } }) => (
                    <Select
                        labelId={labelId}
                        label={label}
                        value={value === null ? "" : value}
                        onChange={onChange}
                    >
                        {children}
                    </Select>
                )}
            />
            <FormHelperText>{errorMessage}</FormHelperText>
        </FormControl>
    );
}

export default SelectField;
