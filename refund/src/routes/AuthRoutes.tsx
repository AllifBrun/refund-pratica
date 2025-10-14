import { Route, Routes } from "react-router";
import { Auth } from "../pages/Auth";
import { AuthLayout } from "../pages/AuthLayout";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {

    return (
        <Routes>
            <Route path="/" element={<AuthLayout />} >
            <Route  path="/" element={< SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            </Route >
        </Routes>
    )
}