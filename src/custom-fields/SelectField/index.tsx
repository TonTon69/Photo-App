import { FormControl, InputLabel, Select } from "@mui/material";
import { Controller } from "react-hook-form";

interface ISelectFieldProps {
    name: string;
    control: any;
    label: string;
    children: React.ReactNode;
}

function SelectField(props: ISelectFieldProps) {
    const { name, control, label, children } = props;
    const labelId = `${name}-label`;

    return (
        <FormControl fullWidth margin="normal">
            <InputLabel id={labelId}>{label}</InputLabel>
            <Controller
                control={control}
                name={name}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <Select
                        labelId={labelId}
                        label={label}
                        value={value}
                        onChange={onChange}
                    >
                        {children}
                    </Select>
                )}
            />
        </FormControl>
    );
}

export default SelectField;
