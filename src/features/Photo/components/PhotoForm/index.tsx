import React from "react";
import { Button, CircularProgress, Grid, MenuItem } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IPhotoFormProps {
    onSubmit: any;
    initialValues: any;
}

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title required"),
    categoryId: Yup.number().required("Category required").nullable(),
    photo: Yup.string().required("Photo required"),
});

function PhotoForm(props: IPhotoFormProps) {
    const { onSubmit, initialValues } = props;

    console.log(initialValues);

    const methods = useForm({
        resolver: yupResolver(validationSchema),
    });
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="column">
                    <Grid item>
                        <InputField
                            name="title"
                            label="Title"
                            errorobj={errors}
                        />
                    </Grid>
                    <Grid item>
                        <SelectField
                            name="categoryId"
                            label="Category"
                            errorobj={errors}
                        >
                            {PHOTO_CATEGORY_OPTIONS.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </SelectField>
                    </Grid>
                    <Grid item>
                        <InputField
                            name="photo"
                            label="Photo"
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
                            Add to ablum&nbsp;
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

export default PhotoForm;
