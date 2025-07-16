import { useState } from "react";
import { Input, Textarea } from "../Layout/Inputs";
import { Button, SecondaryButton } from "../Layout/Buttons";

export default function TaskForm({ onSubmit, initialData, onCancel }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [dueDate, setDueDate] = useState(initialData?.due_date || "");
  const [status, setStatus] = useState(initialData?.status || "incomplete");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, due_date: dueDate, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <Textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <Input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
      <select className="border rounded px-3 py-2 w-full" value={status} onChange={e => setStatus(e.target.value)}>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
      <div className="flex gap-2">
        <Button type="submit">Save</Button>
        {onCancel && <SecondaryButton type="button" onClick={onCancel}>Cancel</SecondaryButton>}
      </div>
    </form>
  );
} 