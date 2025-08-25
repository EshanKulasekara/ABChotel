import UserSearchClient from "../../components/UserSearchClient";

export default function AdminPage() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1>This page is for Admins only</h1>
      <UserSearchClient />
    </div>
  );
}
