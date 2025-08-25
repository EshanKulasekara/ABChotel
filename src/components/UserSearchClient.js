"use client";
import { useState } from "react";

export default function UserSearchClient() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setUsers([]);
    const formData = new FormData(e.target);
    const res = await fetch("/api/getUsers", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-4 mt-4 w-full max-w-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input name="first_name" type="text" placeholder="First Name" className="input input-bordered" required />
        <input name="last_name" type="text" placeholder="Last Name" className="input input-bordered" required />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Searching..." : "Find User"}
        </button>
      </form>
      {users.length > 0 && (
        <table className="table w-full mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.first_name}</td>
                <td>{u.last_name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {users.length === 0 && !loading && <div>No users found.</div>}
    </div>
  );
}