type Props = React.ComponentProps<"select"> & {
    legend?: string
}

export function Select({legend, children, ...rest}: Props){

    return(

        <fieldset className="w-full flex flex-1 text-gray-200 focus-within:text-green-100  max-h-20">

         {
                legend && <legend className="uppercase text-xs  mb-2 text-inherit">
                    {legend}
                </legend>
            }


            <select {...rest} className="h-12 w-full border rounded-lg outline-none bg-transparent border-gray-300 focus:border-2 text-sm px-4  focus:border-green-100 placeholder-gray-300 " >
                

                <option value="" disabled hidden>
                    Selecione
                </option>

                {children}

            </select>
        </fieldset>
    )
}