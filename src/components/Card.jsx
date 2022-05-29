

const Card = ({className, children, ...rest}) => {
    return (
        <div className={"h-screen w-screen snap-center overflow-hidden" + " " + className} {...rest}>
            {children}
        </div>
    )
}
export default Card