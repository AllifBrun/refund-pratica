import { Button } from '../Components/Button'
import { Input } from '../Components/Input'

import { useState } from 'react'

export function SignUp() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [passwordConfirm, setPasswordConfirm] = useState("")

const [isLoading, setIsLoading] = useState(false)

function onSubmit(e: React.FormEvent){
  e.preventDefault()
  console.log(name, email, password, passwordConfirm)
}

  return (
    <form 
    onSubmit={onSubmit}
    className="w-full flex flex-col gap-4">

        
      <Input 
      onChange={(e)=> setName(e.target.value)}
      required 
      legend="Nome" 
      placeholder="Digite seu nome"
      />

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

       <Input 
      onChange={(e)=> setPasswordConfirm(e.target.value)}
      required
      legend="Confirme a senha" 
      placeholder="Repita sua senha" 
      type="password"
      />

      <Button type="submit">Entrar</Button>

      <a href="/"
      className='text-center text-gray-100 hover:text-green-800 transition ease-linear mb-4 text-sm font-semibold mt-10'
      >Já tenho uma conta</a>
    </form>


  )
}
