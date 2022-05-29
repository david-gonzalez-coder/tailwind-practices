import { useEffect, useState, useRef } from "react"

const Slider = ({children, className, ...rest}) => {
    const [windowWidth, setWindowWidth] = useState(null)
    const sliderRef = useRef(null)
    useEffect(() =>{
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () =>{
            setWindowWidth(window.innerWidth);
        })
        return window.addEventListener('resize', () =>{})
    },[])
    return (
        <div 
            ref={sliderRef}
            onWheel={e => {
                if(e.deltaY < 0) sliderRef.current.scrollLeft -= windowWidth
                else sliderRef.current.scrollLeft += windowWidth
            }}
            className={"snap-madatory snap-x scrollbar-none flex flex-wrap flex-col scroll-smooth h-screen w-screen overflow-x-scroll" + " " + className } 
            {...rest}
        >
            {children}
        </div>
    )
}
export default Slider