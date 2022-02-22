import React from "react";
import RandomPhoto from "../../components/RandomPhoto";

interface IRandomPhotoFieldProps {
    name: string;
    control: any;
}

function RandomPhotoField(props: IRandomPhotoFieldProps) {
    const { name, control } = props;

    const handleImageUrlChange = (newImageUrl: string) => {
        control.value = newImageUrl;
    };

    return (
        <RandomPhoto
            name={name}
            imageUrl={control.imageUrl}
            onImageUrlChange={handleImageUrlChange}
            onRandomButtonBlur={control.onRandomButtonBlur}
        />
    );
}

export default RandomPhotoField;
