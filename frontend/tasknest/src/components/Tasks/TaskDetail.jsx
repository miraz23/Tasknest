export default function TaskDetail({ task }) {
  if (!task) return <div>Loading...</div>;
  return (
    <div className="bg-white p-6 rounded shadow max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
      <p className="mb-2">{task.description}</p>
      <p className="text-sm text-gray-500 mb-2">Status: <span className={task.status === 'completed' ? 'text-green-600' : 'text-yellow-600'}>{task.status}</span></p>
      <p className="text-sm text-gray-500">Due: {task.due_date}</p>
    </div>
  );
} 