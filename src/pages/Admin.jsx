import { useAuth } from "../context/AuthContext";

export default function Admin() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.username}. Only logged-in users can see this page.</p>
    </div>
  );
}