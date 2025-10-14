type Props = React.ComponentProps<"input"> & {
    legend?: string
}


export function Input({ type="text", legend, ...rest }: Props) {


    return (
        <fieldset className="w-full flex flex-1 text-gray-200 focus-within:text-green-100  max-h-20">

            {legend && <legend className="text-inherit uppercase text-xs mb-2">{legend}</legend>}

            <input 
            {...rest} 
            type={type}
            className="w-full h-12 border border-gray-300 focus:border-green-100  focus:border-2 outline-none rounded-lg text-gray-100 p-4 placeholder-gray-300" />


        </fieldset>
    )
}