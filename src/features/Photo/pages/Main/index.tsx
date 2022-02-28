import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import Photo from "../../../../model/Photo";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from "../../photoSlice";

function Main() {
    const dispatch = useAppDispatch();
    const history = useNavigate();

    // connect store
    const getPhotoList = useAppSelector((state) => state.photo.photoList);
    console.log("List of photos: ", getPhotoList);

    const handlePhotoEditClick = (photo: Photo) => {
        const editPhotoUrl = `/photos/${photo.id}`;
        history(editPhotoUrl);
    };

    const handlePhotoRemoveClick = (photo: Photo) => {
        const removePhotoId = photo.id;
        const action = removePhoto({ id: removePhotoId });
        dispatch(action);
    };

    return (
        <div className="photo-main">
            <Banner
                title="Your awesome photos"
                backgroundUrl={Images.PINK_BG}
            />

            <Container>
                <Box sx={{ my: 4, textAlign: "center" }}>
                    <Link to="/photos/add">Add a new photo</Link>
                </Box>

                <PhotoList
                    photoList={getPhotoList}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default Main;
