import { useState } from 'react'
import { Input } from '../Components/Input'
import { Button } from '../Components/Button'
import { Select } from '../Components/Select'

import { CATEGORIES_KEYS, CATEGORIES } from '../utils/categories'

export function Refund() {

const [name, setName] = useState("")
const [amount, setAmount] = useState("")
const [category, setCategory] = useState("")
const [filename, setFilename] = useState("")
const [isLoading, setIsLoading] = useState(false)

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

    <div className='flex gap-4'>

    </div>
    </form>
   </main>


  )
}
