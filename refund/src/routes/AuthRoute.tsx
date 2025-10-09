import { Route, Routes } from "react-router";
import { Auth } from "../pages/Auth";

export function AuthRoute() {

    return (
        <Routes>
            <Route path="/" element={<Auth />} />
        </Routes>
    )
}