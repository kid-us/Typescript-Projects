import { useEffect, useState } from 'react';
import ReminderList from './components/ReminderList'
import Reminder from './models/reminder'
import ReminderService from './services/reminder'
import NewReminder from './components/NewReminder';

function App() {
 const [reminders, setReminder] = useState<Reminder[]>([]);

 useEffect(()=> {
  loadReminders();
 }, []);


 const loadReminders = async ()=>{
  const reminders = await ReminderService.getReminders();
  setReminder(reminders);
 }

 const removeReminders = (id:number) => {
  setReminder(reminders.filter(reminder => reminder.id !== id));
 }

 const addReminders = async (comment: string) => {
  const newComment = await ReminderService.addReminder(comment);
   setReminder([newComment, ...reminders]);
 }

  return (
    <>
      <div>
        <p>Hello React Typescript</p>
        <div className="fs-5">
          <NewReminder onAddReminder={addReminders} />
          <ReminderList  items={reminders} onRemoveReminder={removeReminders} />
        </div>
       </div>
    </>
  )
}

export default App
