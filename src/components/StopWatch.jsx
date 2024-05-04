import React, { useEffect, useRef, useState } from 'react'
import Style from './StopWatch.module.css'




const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [elapseTime, setElapseTime]= useState(0)
    const intervalRef =useRef(null)
    const startTimeRef = useRef(0)


    useEffect(()=>{
        if (isRunning) {
            intervalRef.current = setInterval(()=>{
                setElapseTime(Date.now() - startTimeRef.current)
            },10)
        }

        return ()=>{
            clearInterval(intervalRef.current)
        }
    }, [isRunning])

    const start = ()=>{
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapseTime
    }
    const reset = ()=>{
        setElapseTime(0)
        setIsRunning(false)
        console.log(isRunning);
    }
    const pause = ()=>{
        setIsRunning(false)
        console.log(isRunning);
    }

    const formatTime = ()=>{

        let hours = Math.floor(elapseTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapseTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapseTime / (1000) % 60)

        hours = String(hours).padStart(2, "00")
        minutes = String(minutes).padStart(2, "00")
        seconds = String(seconds).padStart(2, "00")

        return `${hours}: ${minutes}: ${seconds}`
    }
  return (
      <div id={Style.time}>
          <div id="timer">
              <div>{formatTime()}</div>
          </div>
          <button onClick={start} className={Style.btn} >START</button>
          <button onClick={pause} className={Style.btn}>PAUSE</button>
          <button onClick={reset} className={Style.btn}>RESET</button>
      </div>
  )
}

export default Stopwatch