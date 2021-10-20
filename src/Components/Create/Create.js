import { useState, useRef, useEffect } from 'react'
import CreateTodo from '../CreateTodo'
import addIcon from './add-circle.svg'
import '../../styles/Create.sass'

const Create = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const inputEl = useRef(null)

  useEffect(() => {
    if (isFormVisible) inputEl.current.focus()
  }, [isFormVisible])

  return (
    <>
      <div className={`form ${isFormVisible && 'visible-form'}`}>
        <CreateTodo ref={inputEl} />
      </div>

      <div
        style={{
          height: `${isFormVisible ? '4rem' : '0px'}`,
          transition: 'height .3s',
        }}
      ></div>

      <div className='create'>
        <img
          src={addIcon}
          alt='add-icon'
          onClick={() => setIsFormVisible(!isFormVisible)}
          className={`add-icon ${isFormVisible && 'add-active'}`}
        />
      </div>
    </>
  )
}

export default Create
