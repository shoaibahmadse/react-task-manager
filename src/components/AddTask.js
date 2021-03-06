import React from 'react'
import {useState} from 'react'
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert("Please enter a text")
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Add task </label>
            <input type='text' placeholder='Add text' value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day & Time </label>
            <input type='text' placeholder='Day & Time'value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set reminder</label>
            <input type='checkbox' placeholder='Add text' value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' className='btn btn-block'
        value='Save Task'/>
        </form>

    )
}

export default AddTask
