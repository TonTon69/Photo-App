import { Button, CircularProgress, Grid } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../../custom-fields/InputField";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "../../../../models";

interface RegisterFormProps {
    onSubmit: (data: User) => Promise<void>;
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email must be a valid email.")
        .required("Email required."),
    password: Yup.string()
        .required("Password required.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    confirmPassword: Yup.string()
        .required("Confirm Password required.")
        .oneOf([Yup.ref("password")], "Your password do not match."),
});

function RegisterForm(props: RegisterFormProps) {
    const { onSubmit } = props;

    const methods = useForm<User>({
        resolver: yupResolver(validationSchema),
    });

    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Grid container direction="column">
                    <Grid item>
                        <InputField
                            name="email"
                            label="Email"
                            errorobj={errors}
                        />
                    </Grid>
                    <Grid item>
                        <InputField
                            name="password"
                            label="Password"
                            type="password"
                            errorobj={errors}
                        />
                    </Grid>
                    <Grid item>
                        <InputField
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            errorobj={errors}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ mt: 3 }}
                        >
                            Register&nbsp;
                            {isSubmitting && (
                                <CircularProgress color="inherit" size={20} />
                            )}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
}

export default RegisterForm;
