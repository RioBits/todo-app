const defaultSetup = {
  isRunning: false,
  timeUI: '25:00',
  time: 25 * 60 - 1,
  timer: null,
}

export let counter = { ...defaultSetup }

export function startTimer() {
  return setInterval(updateCountdown, 1000)
}

function reset() {
  clearInterval(counter.timer)
  counter = { ...defaultSetup }
}

export function updateCountdown() {
  const minutes = Math.floor(counter.time / 60)
  const seconds = counter.time % 60

  // Examples: '04:02' '09:20' '12:07'
  counter.timeUI =
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds)

  if (minutes === 0 && seconds === 0) {
    const doneAudio = new Audio('./done.mp3')
    doneAudio.play().then(() => reset())
  }

  counter.time--
}
