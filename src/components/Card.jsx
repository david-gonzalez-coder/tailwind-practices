

const Card = ({className, children, ...rest}) => {
    return (
        <div className={"w-h-screen snap-center overflow-hidden" + " " + className} {...rest}>
            {children}
        </div>
    )
}
export default Card