import { Button } from '../Components/Button'
import { Input } from '../Components/Input'

import { useState } from 'react'

export function SignIn() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isLoading, setIsLoading] = useState(false)

function onSubmit(e: React.FormEvent){
  e.preventDefault()
  console.log(email, password)
}

  return (
    <form 
    onSubmit={onSubmit}
    className="w-full flex flex-col gap-4">

      <Input 
      onChange={(e)=> setEmail(e.target.value)}
      required 
      legend="E-mail" 
      placeholder="Digite seu email"
      type="email"
      />

      <Input 
      onChange={(e)=> setPassword(e.target.value)}
      required
      legend="Senha" 
      placeholder="Digite sua senha" 
      type="password"
      />

      <Button type="submit">Entrar</Button>

      <a href="/signup"
      className='text-center text-gray-100 hover:text-green-800 transition ease-linear mb-4 text-sm font-semibold mt-10'
      >Criar conta</a>
    </form>


  )
}
