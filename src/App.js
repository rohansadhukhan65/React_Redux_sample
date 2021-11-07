import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incNum, decNum} from './actions/actionOne'

function App() {
  const mystate = useSelector( (state) => state.changeNum)
  const dispatch = useDispatch()


  return (
    <div style={{
      position:'absolute',
      top:'50%', 
      left:'50%',
      transform:'translate(-50%,-50%)',
      display:'flex',
      }}>
        
        
        <button onClick={()=> dispatch(incNum())} style={{fontSize:'23px'}}>+</button> 

        <div style={{
          paddingLeft:'23px',
          paddingRight:'23px',
          fontSize:'23px'
        }}>{mystate}</div>

        <button onClick={()=> dispatch(decNum())} style={{fontSize:'25px'}}>-</button>
    </div>
  )
}

export default App
