import { classMerge } from "../utils/classMerge"

type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
    variant?: "base" | "icon" | "iconSmall"

}


const variants = {

    button: {
        iconSmall: "h-8 w-8",
        base: "h-12",
        icon: "h-12 w-12"
    }

}



export function Button({

    children,
    variant = "base",
    isLoading = false,
    type = "button",
    className,
    ...rest
}: Props) {

    return (

        <button
        type={type}
        disabled={isLoading}
        className={
            classMerge([" bg-green-100 w-full flex justify-center items-center rounded-lg box-border py-2 px-2.5 text-white font-bold    hover:bg-green-200 transition ease-linear cursor-pointer disabled:opacity-50", variants.button[variant], isLoading && "disabled:cursor-progress" ])
            }>
            {children}
        </button>
    )

}