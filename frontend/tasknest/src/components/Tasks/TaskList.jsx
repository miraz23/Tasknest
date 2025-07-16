import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onEdit, onDelete, onToggleStatus }) {
  if (!tasks.length) return <div className="text-center text-gray-500">No tasks found.</div>;
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
} 