import { useState } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import Photo from "../../../../model/Photo";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from "../../photoSlice";
import Notification from "../../../../components/Notification";
import ConfirmDialog from "../../../../components/ConfirmDialog";

function Main() {
    const dispatch = useAppDispatch();
    const history = useNavigate();

    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "success",
    });

    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
        onConfirm: () => {},
    });

    // connect store
    const getPhotoList = useAppSelector((state) => state.photo.photoList);
    console.log("List of photos: ", getPhotoList);

    const handlePhotoEditClick = (photo: Photo) => {
        const editPhotoUrl = `/photos/${photo.id}`;
        history(editPhotoUrl);
    };

    const handlePhotoRemoveClick = (photo: Photo) => {
        setConfirmDialog({
            isOpen: true,
            title: "Are you sure to delete this photo?",
            subTitle: "You can't undo this operation",
            onConfirm: () => {
                const removePhotoId = photo.id;
                const action = removePhoto({ id: removePhotoId });
                dispatch(action);

                setNotify({
                    isOpen: true,
                    message: "Deleted Successfully",
                    type: "error",
                });

                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false,
                });
            },
        });
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

            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </div>
    );
}

export default Main;
