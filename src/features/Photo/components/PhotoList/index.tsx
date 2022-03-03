import React from "react";
import { Grid } from "@mui/material";
import PhotoCard from "../PhotoCard";
import { Photo } from "../../../../models/Photo";

interface IPhotoListProps {
    photoList: Photo[] | undefined;
    onPhotoEditClick: (photo: Photo) => void;
    onPhotoRemoveClick: (photo: Photo) => void;
}

function PhotoList(props: IPhotoListProps) {
    const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {photoList &&
                photoList.map((photo) => (
                    <Grid key={photo.id} item xs={4}>
                        <PhotoCard
                            photo={photo}
                            onEditClick={onPhotoEditClick}
                            onRemoveClick={onPhotoRemoveClick}
                        />
                    </Grid>
                ))}
        </Grid>
    );
}

export default PhotoList;
