import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import Main from "./pages/Main";

function Product() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Product;
