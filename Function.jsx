import React from 'react'
import { useState } from 'react'
import * as math from 'mathjs'

function Function() {
    const [display, setDisplay] = useState('')

    const output = (symbol) =>{
        switch(symbol){
            case '=':
                try{
                    setDisplay(math.evaluate(display).toString())
                }
                catch(error){
                    setDisplay("error")
                }
                break
            case 'C':
                setDisplay('')
                break
            default:
                setDisplay((prevoutput)=>prevoutput+symbol)
        }

    }
  return (
    <div className='Calculator'>
    <div className='display'>
    {display}
    </div>
    <div className='Button'>
        <div className='Button1'>
            <button onClick={()=>output('0')}>0</button>
            <button onClick={()=>output('1')}>1</button>
            <button onClick={()=>output('2')}>2</button>
            <button onClick={()=>output('3')}>3</button>
            <button onClick={()=>output('+')}>+</button>
        </div>
        <div className='Button2'>
            <button onClick={()=>output('4')}>4</button>
            <button onClick={()=>output('5')}>5</button>
            <button onClick={()=>output('6')}>6</button>
            <button onClick={()=>output('7')}>7</button>
            <button onClick={()=>output('-')}>-</button>
        </div>
        <div className='Button3'>
            <button onClick={()=>output('8')}>8</button>
            <button onClick={()=>output('9')}>9</button>
            <button onClick={()=>output('=')}>=</button>
            <button onClick={()=>output('%')}>%</button>
            <button onClick={()=>output('*')}>*</button>
        </div>
        <div className='Button4'>
            <button onClick={()=>output('C')}>C</button>
            <button onClick={()=>output('/')}>/</button>
        </div>
    </div>
    </div>
  )
}

export default Function