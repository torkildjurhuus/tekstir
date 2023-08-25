import {MainScreen} from "./views/main-screen/main-screen";
import { Route, Routes } from "react-router-dom";

const Views = () => {
    return (
        <Routes>
            <Route path={"/"} element={<MainScreen />} />
        </Routes>
    );
};

export default Views;
