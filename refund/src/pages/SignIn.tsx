import { Button } from "../Components/Button"
import { Input } from "../Components/Input"

export function SignIn() {
    return (
        <form className="w-full flex flex-col gap-4">
          <Input legend="Teste"/>
            <Button>
                Entrar
            </Button>
        </form>
    )
}