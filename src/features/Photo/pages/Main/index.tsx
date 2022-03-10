import { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from "../../photoSlice";
import Notification from "../../../../components/Notification";
import ConfirmDialog from "../../../../components/ConfirmDialog";
import { Photo } from "../../../../models";

function Main() {
    const dispatch = useAppDispatch();
    const history = useNavigate();
    const location = useLocation();

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

    useEffect(() => {
        if (location.state) {
            setNotify({
                isOpen: true,
                message: "Submitted Successfully",
                type: "success",
            });
        }
    }, []);

    return (
        <div className="photo-main">
            <Banner
                title="Your awesome photos"
                backgroundUrl={Images.PINK_BG}
            />

            <Container>
                <Box sx={{ my: 4, textAlign: "center" }}>
                    <NavLink to="/photos/add">
                        <Button variant="outlined">Add a new photo</Button>
                    </NavLink>
                </Box>

                <Box sx={{ mb: 6 }}>
                    <PhotoList
                        photoList={getPhotoList}
                        onPhotoEditClick={handlePhotoEditClick}
                        onPhotoRemoveClick={handlePhotoRemoveClick}
                    />
                </Box>
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
