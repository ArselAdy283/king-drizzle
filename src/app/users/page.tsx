"use client";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setForm({ name: "", age: "", email: "" });
    fetchUsers();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Add New User</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        /><br/>

        <input
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        /><br/>

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        /><br/>

        <button type="submit">Submit</button>
      </form>

      <h2>All Users</h2>
      {users.map((u: any) => (
        <div key={u.id}>
          {u.name} — {u.age} — {u.email}
        </div>
      ))}
    </div>
  );
}
