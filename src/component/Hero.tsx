"use client"
import React, { useState } from 'react'

const Hero = () => {
    const [count, setCount]=useState(0)
  return (
    <div>
        <h2 className='text-red-400'>Hero {count}</h2>
        <button onClick={()=>(setCount(p=>p+1))}>Increment</button>
    </div>
  )
}

export default Hero