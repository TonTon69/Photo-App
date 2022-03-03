import React from "react";
import { Button, CircularProgress, Grid } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../../custom-fields/InputField";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IPhotoFormProps {
    onSubmit: any;
    initialValues: {} | undefined;
}

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title required"),
    categoryId: Yup.number().required("Category required").nullable(),
    photo: Yup.string().required("Photo required"),
});

function AuthForm(props: IPhotoFormProps) {
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
                            name="username"
                            label="Username"
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
