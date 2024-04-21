import React, { useState } from "react"

interface AddNewReminder {
    onAddReminder: (comment: string)=>void;
}

const NewReminder = ({onAddReminder}: AddNewReminder) => {
    const[reminder,setReminder] = useState('');

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if(reminder !== ""){
            onAddReminder(reminder)
            setReminder('');
        }
    }
  return (
    <form onSubmit={onSubmitForm}>
        <label htmlFor="new-reminder"></label>
        <input onChange={(e)=> setReminder(e.target.value)} value={reminder} type="text" name="new-reminder" className="form-control rounded" />
        <button type="submit" className="btn btn-success my-3 shadow-lg">Add Todo</button>
    </form>
  )
}

export default NewReminder