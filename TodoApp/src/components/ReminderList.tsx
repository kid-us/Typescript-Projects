import Reminder from "../models/reminder";

interface ReminderListProps {
    items: Reminder[];
}

const ReminderList = ({items}: ReminderListProps) => {
  return (
    <div>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default ReminderList