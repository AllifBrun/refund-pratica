import { Route, Routes } from "react-router";
import { Auth } from "../pages/Auth";
import { AuthLayout } from "../pages/AuthLayout";
import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {

    return (
        <Routes>
            <Route path="/" element={<AuthLayout />} >

            <Route  path="/" element={< SignIn />} />
            </Route >
        </Routes>
    )
}