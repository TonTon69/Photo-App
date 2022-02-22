import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";

function PhotoForm() {
    const [selectedId, setSelectedId] = useState<number>(-1);

    return (
        <form noValidate>
            <Grid container direction="column">
                <Grid item>
                    <TextField
                        id="title-input"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <FormControl
                        // error={formValues.address.error}
                        fullWidth
                        margin="normal"
                    >
                        <InputLabel id="select-label-category">
                            Category
                        </InputLabel>
                        <Select
                            labelId="select-label-category"
                            name="category"
                            label="Category"
                            value={selectedId === -1 ? "" : selectedId}
                            onChange={(e) => {
                                setSelectedId(Number(e.target.value));
                            }}
                        >
                            {PHOTO_CATEGORY_OPTIONS.map((option, i) => (
                                <MenuItem key={i} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                        {/* <FormHelperText>
                            {formValues.address.error &&
                                formValues.address.errorMessage}
                        </FormHelperText> */}
                    </FormControl>
                </Grid>
                <Grid item sx={{ display: "flex", mt: 2 }}>
                    <Box>
                        <Button
                            variant="outlined"
                            style={{ textTransform: "none" }}
                        >
                            Random a photo
                        </Button>
                    </Box>
                    <Box sx={{ ml: 2 }}>
                        <img
                            width="200px"
                            height="200px"
                            src={Images.PINK_BG}
                            alt="random"
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ mt: 3 }}
                        style={{ textTransform: "none" }}
                    >
                        Add to ablum
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default PhotoForm;
