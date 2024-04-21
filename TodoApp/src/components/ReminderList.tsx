import Reminder from "../models/reminder";

interface ReminderListProps {
    items: Reminder[];
}

const ReminderList = ({items}: ReminderListProps) => {
  return (
    <div>
        <ul className="list-group">
            {items.map(item => (
                <li key={item.id} className="list-group-item">{item.comment} <button className="btn btn-danger">x</button> </li>
            ))}
        </ul>
    </div>
  )
}

export default ReminderList