import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Photo {
    title: string;
    categoryId: number;
    photo: string;
}

interface PhotoSliceState {
    photos: Photo[];
}

const initialState: PhotoSliceState = {
    photos: [],
};

const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
        addPhoto: (state, action: PayloadAction<Photo>) => {
            state.photos.push(action.payload);
        },
    },
});

export const { addPhoto } = photoSlice.actions;
export default photoSlice.reducer;
