import { useState, useEffect } from 'react'
import { counter, startTimer } from './Timer'
import '../../styles/Focus.sass'

const Focus = () => {
  const [isRunning, setIsRunning] = useState(counter.isRunning)
  const [timeUI, setTimeUI] = useState(counter.timeUI)

  function toggleCount() {
    const clickAudio = new Audio('./click.mp3')
    clickAudio.play()

    // To save it in Timer.js because react components reset the state
    counter.isRunning = !counter.isRunning
    setIsRunning(counter.isRunning)

    if (counter.isRunning) {
      counter.timer = startTimer()
    } else {
      clearInterval(counter.timer)
    }
  }

  useEffect(() => {
    let timer
    if (isRunning) {
      // update the state only when we are in /pomodoro
      timer = setInterval(() => {
        setTimeUI(counter.timeUI)
        if (!counter.isRunning) {
          setIsRunning(false)
        }
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning])

  return (
    <div className="focus">
      <h1>{timeUI}</h1>
      <button onClick={toggleCount}>{isRunning ? 'Stop' : 'Start'}</button>
    </div>
  )
}

export default Focus
