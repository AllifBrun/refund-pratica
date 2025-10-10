import { Route, Routes } from "react-router";
import { Employee } from "../pages/Employee";

export function EmployeeRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Employee />} />
        </Routes>
    )
}