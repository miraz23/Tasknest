import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTask } from "../api/tasks";
import TaskDetail from "../components/Tasks/TaskDetail";

export default function TaskDetailPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  useEffect(() => {
    getTask(id).then(setTask);
  }, [id]);
  return <TaskDetail task={task} />;
} 