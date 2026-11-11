import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RatingsBlog from "./pages/RatingsBlog";
import RatingDetail from "./pages/RatingDetail";
import Admin from "./pages/Admin";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<RatingsBlog />} />
          <Route path="/blog/:slug" element={<RatingDetail />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}