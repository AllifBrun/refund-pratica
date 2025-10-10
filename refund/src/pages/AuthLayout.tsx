import logoSvg from "../assets/logo.svg"
import { Outlet } from "react-router"

export function AuthLayout(){

    return(
        <div className="bg-gray-400 h-screen w-screen flex flex-col items-center justify-center ">


                <main className="flex items-center justify-center w-full md:max-w-[462px] bg-gray-500 rounded-md">
                 
                 <img src={logoSvg} alt="Logo do Refund" className="my-8 "/>

                 <Outlet />

                </main>
        </div>
    )
}