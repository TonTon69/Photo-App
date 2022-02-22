import { Button, Grid, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";

function PhotoForm() {
    const { handleSubmit, control } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column">
                <Grid item>
                    <InputField name="title" control={control} label="Title" />
                </Grid>
                <Grid item>
                    <SelectField
                        name="category"
                        control={control}
                        label="Category"
                    >
                        {PHOTO_CATEGORY_OPTIONS.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </SelectField>
                </Grid>
                <Grid item sx={{ display: "flex", mt: 2 }}>
                    <RandomPhotoField name="photo" control={control} />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ mt: 3 }}
                    >
                        Add to ablum
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default PhotoForm;
