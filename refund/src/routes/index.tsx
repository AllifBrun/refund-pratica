import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthRoute } from "./AuthRoute"
import { Auth } from "../pages/Auth"
import { Employee } from "../pages/Employee"
import { EmployeeRoute } from "./EmployeeRoute"


const session = {
    user: {
        role: "employee"
    }
}

export function IndexRoutes() {

    function RouteSelectionByRole() {

        switch (session?.user.role) {
            case "employee":

               return <EmployeeRoute />

            default:

              return  <AuthRoute />

        }
    }


    return (
        <BrowserRouter>
            <RouteSelectionByRole />
        </BrowserRouter>
    )
}