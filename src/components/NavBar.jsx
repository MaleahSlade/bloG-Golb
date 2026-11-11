import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        {isAuthenticated && <Link to="/admin">Admin</Link>}
      </div>

      <div className="nav-user">
        {isAuthenticated ? (
          <>
            <span>Ramen Raider: {user.username}</span>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            <span>Welcome, Guest!</span>
            <Link to="/login">Log In</Link>
          </>
        )}
      </div>
    </nav>
  );
}