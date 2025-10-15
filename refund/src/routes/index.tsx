import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "./AuthRoutes"
import { Auth } from "../pages/Auth"
import { EmployeeRoutes } from "./EmployeeRoutes"


const session = {
    user: {
        role: "employee"
    }
}

export function IndexRoutes() {

    function RouteSelectionByRole() {

        switch (session?.user.role) {
            case "employee":

               return <EmployeeRoutes />

            default:

              return  <AuthRoutes />

        }
    }


    return (
        <BrowserRouter>
            <RouteSelectionByRole />
        </BrowserRouter>
    )
}