import { Route, Routes } from "react-router";
import { Employee } from "../pages/Employee";

export function EmployeeRoute() {

    return (
        <Routes>
            <Route path="/" element={<Employee />} />
        </Routes>
    )
}