import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEdit from "./pages/AddEdit";
import Main from "./pages/Main";

function Photo() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="add" element={<AddEdit />} />
            <Route path=":photoId" element={<AddEdit />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Photo;
