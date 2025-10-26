import { useState } from 'react'
import { Input } from '../Components/Input'
import { Button } from '../Components/Button'
import { Select } from '../Components/Select'
import { useNavigate, useParams } from "react-router";

import { CATEGORIES_KEYS, CATEGORIES } from '../utils/categories'
import { Upload } from '../Components/Upload'

export function Refund() {

const [name, setName] = useState("")
const [amount, setAmount] = useState("")
const [category, setCategory] = useState("")
const [filename, setFilename] = useState("")
const [isLoading, setIsLoading] = useState(false)

 const navigate = useNavigate()
    const params = useParams<{ id: string }>()
    console.log(params.id)

function onSubmit(e: React.FormEvent){
  e.preventDefault()
  console.log(name, amount, filename)
}

  return (


   <main className="flex flex-col items-center justify-center w-full  ">
    
    <form onSubmit={onSubmit} className="justify-center w-full md:max-w-[462px] bg-gray-500 rounded-xl box-border p-10  lg:min-w-[512px] flex flex-col gap-6" >

    <header className='flex flex-col justify-start mb-5'> 
        <h1 className='text-xl text-gray-100 font-bold '>Solicitação de reembolso</h1>
        <p className='text-sm text-gray-200 mt-2 mb-2'>Dados da despesa para solicitar reembolso.</p>
            </header>

    <Input legend='nome da solicitação' onChange={(e)=> setName(e.target.value)}/>


    <div className='flex flex-1 gap-4'>

    <Select
     required
     legend='Categoria'
     value={category}
     onChange={(e)=> setCategory(e.target.value)}>
    {
      CATEGORIES_KEYS.map((category)=> (
        <option className='bg-gray-500 text-gray-100 outline-none border rounded-lg'
        key={category} 
        value={category}>
        {CATEGORIES[category].name
        }
      </option>
      )
    )
    
  }
    </Select>

  <Input
  legend='Valor'
  placeholder='0,00' 
  />

  </div>

    {
                params.id ? <a href="https://www.rocketseat.com.br/" target="_blank"  className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear">

                    <img src={fileSvg} alt="Ícone de arquivo" />
                    Abrir comprovante
                    </a> : (
                    <Upload filename={filename && filename.name} onChange={(e) => e.target.files && setFilename(e.target.files[0])} disabled={!!params.id} />
                )
            }


            <Button type='submit' isLoading={isLoading}>
              {params.id ? "Voltar" : "Enviar"}
            </Button>
    

    
    </form>
   </main>


  )
}
