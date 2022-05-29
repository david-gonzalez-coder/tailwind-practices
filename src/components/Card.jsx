

const Card = ({className, children, ...rest}) => {
    return (
        <div className={"h-screen w-screen" + " " + className} {...rest}>
            {children}
        </div>
    )
}
export default Card