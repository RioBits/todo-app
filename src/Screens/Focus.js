import { useState, useEffect } from 'react'
import '../styles/Focus.sass'

const defaultSet = {
  isRunning: false,
  timeUI: '25:00',
  time: 25 * 60 - 1,
}

let counter = { ...defaultSet }

function updateCountdown(setTimeUI, setIsCounting) {
  const minutes = Math.floor(counter.time / 60)
  const seconds = counter.time % 60
  counter.timeUI =
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds)
  setTimeUI(counter.timeUI)
  if (minutes === 0 && seconds === 0) {
    const alarmAudio = new Audio('./timeout.mp3')
    alarmAudio.play().then(() => setTimeUI(counter.timeUI))
    setIsCounting(false)
    counter = { ...defaultSet }
    return
  }
  counter.time--
}

const Focus = () => {
  const [isCounting, setIsCounting] = useState(counter.isRunning)
  const [timeUI, setTimeUI] = useState(counter.timeUI)

  useEffect(() => {
    let timer
    if (isCounting) {
      timer = setInterval(() => updateCountdown(setTimeUI, setIsCounting), 1000)
    }
    return () => clearInterval(timer)
  }, [isCounting])

  function toggleCount() {
    const clickAudio = new Audio('./click.mp3')
    clickAudio.play()
    counter.isRunning = !counter.isRunning
    setIsCounting(counter.isRunning)
  }

  return (
    <div className="focus">
      <h1>{timeUI}</h1>
      <button onClick={toggleCount}>
        {counter.isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}

export default Focus
