import { useState } from 'react';
import ReminderList from './components/ReminderList'
import Reminder from './models/reminder'

function App() {
 const [reminders, setReminder] = useState<Reminder[]>([
  {id:1, title: "Reminder one"}
 ])

  return (
    <>
      <div>
        <p>Hello React Typescript</p>
        <div className="fs-5">
          <ReminderList  items={reminders} />
        </div>
       </div>
    </>
  )
}

export default App
