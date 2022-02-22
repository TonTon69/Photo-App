import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface IInputFieldProps {
    name: string;
    control: any;
    label: string;
}

function InputField(props: IInputFieldProps) {
    const { name, control, label } = props;

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    label={label}
                    value={value}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                    error={!!error}
                    helperText={error ? error.message : null}
                />
            )}
            rules={{ required: `${label} required` }}
        />
    );
}

export default InputField;
