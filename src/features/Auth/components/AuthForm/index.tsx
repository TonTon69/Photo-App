import React from "react";
import { Button, CircularProgress, Grid } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../../custom-fields/InputField";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IAuthFormProps {
    onSubmit: any;
    initialValues: {} | undefined;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email required"),
    password: Yup.string()
        .required("Password required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
});

function AuthForm(props: IAuthFormProps) {
    const { onSubmit, initialValues } = props;

    const methods = useForm({
        defaultValues: initialValues,
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
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ mt: 3 }}
                        >
                            Login&nbsp;
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

export default AuthForm;
