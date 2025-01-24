import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'


const App = () => {

  const [xValue, setXValue] = useState(0)
  const [roti, setRoti] = useState(0)

  let randomx = gsap.utils.random(-500, 500, 50);
  let rotatex = gsap.utils.random(-360, 360, 30);

  const boxRef = useRef()
  useEffect(()=>{
    gsap.to(boxRef.current,{
      x:xValue,
      rotation:roti,
      duration:1,
    })
  },[xValue,roti])

  return (
    

    <main>
      <button onClick={() => {
        setXValue(randomx)
        setRoti(rotatex)

      }}>Animate</button>
      <div ref={boxRef} className="box"></div>
      
      
    </main>
  )
}

export default App