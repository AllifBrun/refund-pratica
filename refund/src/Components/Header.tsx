import logoSvg from "../assets/logo.svg"
import logOutSvg from "../assets/logout.svg"

export function Header(){

    return( 
        <header className="w-full  flex justify-between box-border px-20"> 
        
            <img src={logoSvg} alt="Logo do Refund" className="my-8" />
        

        <div className="flex gap-3 items-center">
            <span className="text-sm w-full font-semibold text-gray-200">Olá, Allif</span>
            <img src={logOutSvg} alt="Ícone para sair" className="my-8 cursor-pointer hover:opacity-75 transition ease-linear" />
        </div>
        </header>
    )
}