import React from "react";
import { Button, CircularProgress, Grid, MenuItem } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Photo } from "../../../../models";

interface IPhotoFormProps {
    onSubmit: (values: Photo) => Promise<unknown>;
    initialValues: {} | undefined;
    isAddMode: boolean;
}

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title required"),
    categoryId: Yup.number().required("Category required").nullable(),
    photo: Yup.string().required("Photo required"),
});

function PhotoForm(props: IPhotoFormProps) {
    const { onSubmit, initialValues, isAddMode } = props;

    const methods = useForm<Photo>({
        defaultValues: initialValues,
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
                            color={isAddMode ? "primary" : "success"}
                            type="submit"
                            sx={{ mt: 3 }}
                        >
                            {isAddMode ? "Add to ablum" : "Update your photo"}
                            &nbsp;
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
