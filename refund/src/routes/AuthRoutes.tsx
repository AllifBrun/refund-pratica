import { Route, Routes } from "react-router";
import { Auth } from "../pages/Auth";
import { AuthLayout } from "../pages/AuthLayout";

export function AuthRoutes() {

    return (
        <Routes>
            <Route path="/" element={<AuthLayout />} />
        </Routes>
    )
}