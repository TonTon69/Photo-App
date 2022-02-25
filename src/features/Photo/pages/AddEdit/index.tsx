import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto } from "../../photoSlice";

import "./AddEdit.scss";

function AddEdit() {
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (values: any) => {
        console.log("Form submit: ", values);

        const action = addPhoto(values);
        console.log({ action });
        dispatch(action);

        history("/photos");
    };

    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo" />

            <div className="photo-edit__form">
                <Container maxWidth="sm">
                    <PhotoForm onSubmit={handleSubmit} />
                </Container>
            </div>
        </div>
    );
}

export default AddEdit;
