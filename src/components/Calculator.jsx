import {useState} from 'react'

const Calculator = () => {
  const [display, setDisplay] = useState('')
  const [dark, setDark] = useState(false)

  const operation = (symbol) => {
    if(symbol.match(/(\d|\.)/g)) setDisplay(display + symbol)
    else{
      if(symbol === "C") setDisplay("")
      else if(symbol === "⌫") setDisplay(display.slice(0, -1))
      else if(symbol === "=" && display !== "Error")
        try{setDisplay(String(eval(display.replaceAll("×", '*').replaceAll("÷", "/").replaceAll(/\d\(/g, str => str[0] + "*" + "("))))}
        catch(e) {setDisplay("Error")}
      else setDisplay(display + symbol)
    }
  }

  const values = ["⌫","(",")","÷","7","8","9","×","4","5","6","-","1","2","3","+","C","0",".","="]

  return (
    <div className={dark && "dark"}>
      <div className='dark:text-white max-h-[550px] w-h-screen max-w-2xs rounded-2xl bg-white dark:bg-calc-dark-100 flex flex-wrap shadow'>
        <div className={`h-1/3 w-full p-4 flex flex-col justify-between font-medium text-xl`}>
          <div className="flex self-center cursor-pointer rounded-xl dark:bg-calc-dark-300 bg-calc-light-100 w-max">
            <div onClick={()=>setDark(false)} className="px-4 py-1 select-none rounded-xl active:shadow-inner">☼</div>
            <div onClick={()=>setDark(true)} className="px-4 py-1 select-none rounded-xl active:shadow-inner">☾</div>
          </div>
          <div className="self-end">{display}</div>
        </div>
        
        <div className='grid w-full grid-cols-4 grid-rows-5 gap-3 p-4 h-2/3 rounded-2xl dark:bg-calc-dark-300 bg-calc-light-100'>
          {values.map(e =>{
              let textColor
              if(e.match(/(\(|\)|\u232B)/g)) textColor = "text-teal-500"
              else if(e.match(/(=|\+|-|\u00D7|\u00F7)/g)) textColor = "text-red-500"
              return ( 
                <div
                    key={e} 
                    className={`${textColor} select-none cursor-pointer hover:shadow active:shadow-inner dark:bg-calc-dark-200 aspect-square text-lg bg-calc-light-200 font-medium  rounded-lg flex justify-center items-center`}
                    onClick={()=> operation(e)}
                >{e}</div>
              )
            })
          }
        </div>
      </div>
    </div>  
  )
}
export default Calculator
