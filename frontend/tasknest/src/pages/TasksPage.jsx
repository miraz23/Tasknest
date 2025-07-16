import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasks";
import TaskList from "../components/Tasks/TaskList";
import TaskForm from "../components/Tasks/TaskForm";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Incomplete", value: "incomplete" },
  { label: "Upcoming", value: "upcoming" },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    let params = {};
    if (filter === "completed") params.status = "completed";
    if (filter === "incomplete") params.status = "incomplete";
    if (filter === "upcoming") params.upcoming = true;
    const data = await getTasks(params);
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => { fetchTasks(); }, [filter]);

  const handleCreate = async (task) => {
    await createTask(task);
    setShowForm(false);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setEditing(task);
    setShowForm(true);
  };

  const handleUpdate = async (task) => {
    await updateTask(editing.id, task);
    setEditing(null);
    setShowForm(false);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleToggleStatus = async (task) => {
    await updateTask(task.id, { ...task, status: task.status === "completed" ? "incomplete" : "completed" });
    fetchTasks();
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Tasks</h2>
        <button className="btn cursor-pointer" onClick={() => { setShowForm(true); setEditing(null); }}>+ New Task</button>
      </div>
      <div className="flex gap-2 mb-4 flex-col md:flex-row">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`btn btn-sm px-4 py-2 cursor-pointer ${filter === f.value ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {showForm && (
        <TaskForm
          onSubmit={editing ? handleUpdate : handleCreate}
          initialData={editing}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )}
      {loading ? <div>Loading...</div> : (
        <TaskList
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      )}
    </div>
  );
} 