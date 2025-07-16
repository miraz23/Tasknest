import { Button, DangerButton } from "../Layout/Buttons";

export default function TaskItem({ task, onEdit, onDelete, onToggleStatus }) {
  return (
    <div className="flex items-center flex-col md:flex-row justify-between bg-white p-4 rounded shadow">
      <div>
        <h3 className={`font-bold ${task.status === "completed" ? "line-through text-gray-400" : ""}`}>{task.title}</h3>
        <p className="text-sm">{task.description}</p>
        <p className="text-xs text-gray-500">Due: {task.due_date}</p>
      </div>
      <div className="flex items-center gap-2 py-5 md:py-0">
        <Button className="btn-sm" onClick={() => onToggleStatus(task)}>
          {task.status === "completed" ? "Mark Incomplete" : "Mark Complete"}
        </Button>
        <Button className="btn-sm" onClick={() => onEdit(task)}>Edit</Button>
        <DangerButton className="btn-sm" onClick={() => onDelete(task.id)}>Delete</DangerButton>
      </div>
    </div>
  );
} 