import React from "react";
import { Box, Button } from "@mui/material";

interface IRandomPhotoProps {
    name: string;
    imageUrl: string;
    onImageUrlChange(imageUrl: string): void;
    onRandomButtonBlur(): void;
}

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props: IRandomPhotoProps) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

    const handleRandomPhotoClick = () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    };

    return (
        <Box>
            <Box>
                <Button
                    variant="outlined"
                    name={name}
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </Box>
            <Box sx={{ ml: 2 }}>
                {imageUrl && (
                    <img
                        width="200px"
                        height="200px"
                        src={imageUrl}
                        alt="Ooops...not found. Pleae click random again."
                    />
                )}
            </Box>
        </Box>
    );
}

export default RandomPhoto;
