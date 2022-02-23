import { Container } from "@mui/material";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";

import "./AddEdit.scss";

function AddEdit() {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo" />

            <div className="photo-edit__form">
                <Container maxWidth="sm">
                    <PhotoForm />
                </Container>
            </div>
        </div>
    );
}

export default AddEdit;
