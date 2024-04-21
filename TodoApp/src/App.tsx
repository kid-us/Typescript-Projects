import { useEffect, useState } from 'react';
import ReminderList from './components/ReminderList'
import Reminder from './models/reminder'
import ReminderService from './services/reminder'

function App() {
 const [reminders, setReminder] = useState<Reminder[]>([]);

 useEffect(()=> {
  loadReminders();
 }, []);


 const loadReminders = async ()=>{
  const reminders = await ReminderService.getReminders();
  setReminder(reminders);
 }



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
