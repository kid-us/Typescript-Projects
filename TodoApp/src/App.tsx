import ReminderList from './components/ReminderList'
import Reminder from './models/reminder'

const reminders: Reminder[]  = [
  {id: 1, title: "Reminder One"},
  {id: 2, title: "Reminder Two"},
  {id: 3, title: "Reminder Three"},
];
function App() {

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
