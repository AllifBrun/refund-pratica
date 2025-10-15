import { Header } from "../Components/Header";
import { Outlet } from "react-router";


export function AppLayout(){

    return(
        <div className="w-full h-screen flex flex-col  bg-gray-400 items-center text-gray-100">
            <main className="p-3 w-full">
            <Header />
            <Outlet />
            </main>
        </div>
    )
}