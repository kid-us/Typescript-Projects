import Reminder from "../models/reminder";

interface ReminderListProps {
    items: Reminder[];
    onRemoveReminder: (id: number) => void;
}

const ReminderList = ({items, onRemoveReminder}: ReminderListProps,) => {
  const handleRemoveReminder = (id: number) => {
    onRemoveReminder(id);
  }

  return (
    <div>
        <ul className="list-group">
            {items.map(item => (
                <li key={item.id} className="list-group-item">{item.comment} <button onClick={()=>handleRemoveReminder(item.id)} className="btn btn-danger">x</button> </li>
            ))}
        </ul>
    </div>
  )
}

export default ReminderList