import { useState } from 'react'


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task </label>
                <input 
                  type='text' 
                  placeholder='Add Task' 
                  value={text} 
                  onChange={(e) => setText(e.currentTarget.value)}/>
            </div>
            <div className='form-control'>
                <label>UserID </label>
                <input type='text' 
                placeholder='Add userID' 
                value={day} 
                onChange={(e) => setDay(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Completed </label>
                <input type='checkbox' 
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
