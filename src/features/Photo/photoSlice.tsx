import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { v4 as uuidv4 } from "uuid";
import { Photo } from "../../models/Photo";

interface initialStateType {
    photoList: Photo[];
}

const photoList: Photo[] = [
    {
        id: uuidv4(),
        categoryId: 5,
        photo: "https://picsum.photos/id/532/300/300",
        title: "Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.",
    },
    {
        id: uuidv4(),
        categoryId: 1,
        photo: "https://picsum.photos/id/43/300/300",
        title: "Ad officia magna veniam sunt.",
    },
    {
        id: uuidv4(),
        categoryId: 3,
        photo: "https://picsum.photos/id/722/300/300",
        title: "Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.",
    },
    {
        id: uuidv4(),
        categoryId: 5,
        photo: "https://picsum.photos/id/294/300/300",
        title: "Deserunt in tempor est id consectetur cupidatat.",
    },
    {
        id: uuidv4(),
        categoryId: 4,
        photo: "https://picsum.photos/id/229/300/300",
        title: "Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.",
    },
    {
        id: uuidv4(),
        categoryId: 1,
        photo: "https://picsum.photos/id/862/300/300",
        title: "Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.",
    },
];

const initialState: initialStateType = {
    photoList,
};

const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
        addPhoto: (state, action: PayloadAction<Photo>) => {
            state.photoList.push(action.payload);
        },
        removePhoto: (state, action: PayloadAction<{ id: string }>) => {
            state.photoList = state.photoList.filter(
                (photo) => photo.id !== action.payload.id
            );
        },
        updatePhoto: (state, action: PayloadAction<Photo>) => {
            const newPhoto = action.payload;
            const photoIndex = state.photoList.findIndex(
                (photo) => photo.id === newPhoto.id
            );

            if (photoIndex >= 0) {
                state.photoList[photoIndex] = newPhoto;
            }
        },
    },
});

const { reducer, actions } = photoSlice;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export const getPhotoList = (state: RootState) => state.photo.photoList;
export default reducer;
