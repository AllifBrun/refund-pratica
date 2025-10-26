import okSvg from "../assets/ok.svg"
import { Button } from "../Components/Button"

export function Confirm(){

    return(
        <main className="w-full h-full flex content-center justify-center ">

        <div className="bg-gray-500 min-w-[512px] rounded-xl box-border flex flex-col items-center gap-6 p-10">

        <h1 className="text-green-100 font-bold text-2xl text-center">Solicitação enviada!</h1>
        
    

        <div className="">
            <img src={okSvg} alt="Ícone de OK"  className="w-28"/>
        </div>

        <p className="text-center text-gray-200 text-sm">Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor financeiro irá entrar em contato com você.</p>

<a href="/" className="w-full mt-10">
        <Button>Nova solicitação</Button>
</a>


        </div>

        </main>
    )
}