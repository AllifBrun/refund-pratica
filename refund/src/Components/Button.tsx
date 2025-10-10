type Props = React.Component<"button"> & {
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
     isLoading,
     type="button",
     ...rest
    }: Props) {

        return(

            <button>
                {children}
            </button>
        )

}