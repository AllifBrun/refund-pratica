import { Route, Routes } from "react-router-dom";
import { Refund } from "../pages/Refund";
import { AppLayout } from "../pages/AppLayout";
export function EmployeeRoutes() {

    return (
        <Routes>
            <Route path="/" element={<AppLayout/>} />
        </Routes>
    )
}