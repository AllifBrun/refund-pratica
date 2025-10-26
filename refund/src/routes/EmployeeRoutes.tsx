import { Route, Routes } from "react-router-dom";
import { Refund } from "../pages/Refund";
import { AppLayout } from "../pages/AppLayout";
import { Confirm } from "../pages/Confirm";
export function EmployeeRoutes() {

    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
              <Route path="/" element={<Refund />} />  
              <Route path="/confirm" element={<Confirm />} />
            </Route>
        </Routes>
    )
}