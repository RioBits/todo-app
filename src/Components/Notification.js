import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/Notification.sass'

const Notification = ({
  text,
  bg = 'mediumseagreen',
  color = 'white',
  center,
}) => {
  const [visible, setVisible] = useState(true)

  return visible ? (
    <div
      className='notification'
      style={{ backgroundColor: bg, color, textAlign: `${center && 'center'}` }}
    >
      {text}{' '}
      <FontAwesomeIcon
        onClick={() => setVisible(false)}
        id='x-icon'
        icon={faTimes}
      />
    </div>
  ) : (
    ''
  )
}

export default Notification
