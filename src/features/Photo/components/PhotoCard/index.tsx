import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import Photo from "../../../../model/Photo";

interface IPhotoCardProps {
    photo: Photo;
    onEditClick: (photo: Photo) => void;
    onRemoveClick: (photo: Photo) => void;
}

function PhotoCard(props: IPhotoCardProps) {
    const { photo, onEditClick, onRemoveClick } = props;

    const handleEditClick = () => {
        if (onEditClick) onEditClick(photo);
    };

    const handleRemoveClick = () => {
        if (onRemoveClick) onRemoveClick(photo);
    };

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={photo.photo}
                alt={photo.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {photo.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleEditClick}>
                    Edit
                </Button>
                <Button size="small" onClick={handleRemoveClick}>
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
}

export default PhotoCard;
