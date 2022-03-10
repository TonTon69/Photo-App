import { useState } from "react";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { v4 as uuidv4 } from "uuid";
import { Photo } from "../../../../models";

import "./AddEdit.scss";

function AddEdit() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const { photoId } = useParams();

    const isAddMode = !photoId;

    const editedPhoto = useAppSelector((state) =>
        state.photo.photoList.find((x) => x.id === photoId)
    );

    const initialValues = isAddMode ? {} : editedPhoto;

    const handleSubmit = (values: Photo) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isAddMode) {
                    // add
                    const action = addPhoto({
                        ...values,
                        id: uuidv4(),
                    });
                    dispatch(action);
                } else {
                    // edit
                    const action = updatePhoto(values);
                    dispatch(action);
                }

                history("/photos", { state: { success: true }, replace: true });
                resolve(true);
            }, 2000);
        });
    };

    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo" />

            <div className="photo-edit__form">
                <Container maxWidth="sm">
                    <PhotoForm
                        isAddMode={isAddMode}
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    />
                </Container>
            </div>
        </div>
    );
}

export default AddEdit;
