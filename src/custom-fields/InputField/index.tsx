import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

interface IInputFieldProps {
    name: string;
    label: string;
    errorobj: {
        [x: string]: any;
    };
    type?: string;
}

function InputField(props: IInputFieldProps) {
    const { control } = useFormContext();
    const { name, label, errorobj, type } = props;

    let isError: boolean = false;
    let errorMessage: string = "";
    if (errorobj && errorobj.hasOwnProperty(name)) {
        isError = true;
        errorMessage = errorobj[name].message;
    }

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
                <TextField
                    label={label}
                    value={value || ""}
                    onChange={onChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    error={isError}
                    helperText={errorMessage}
                    type={type}
                />
            )}
        />
    );
}

export default InputField;
