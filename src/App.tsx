import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserLayout } from "./layouts/user-layout";
import { AuthLayout } from "./layouts/auth-layout";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { Notes } from "./pages/notes";
import { Settings } from "./pages/settings";
import "./tailwind.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout children={<Login />} />} />
        <Route
          path="/dashboard"
          element={<UserLayout children={<Dashboard />} />}
        />
        <Route path="/login" element={<AuthLayout children={<Login />} />} />
        <Route
          path="/register"
          element={<AuthLayout children={<Register />} />}
        />
        <Route path="/notes" element={<UserLayout children={<Notes />} />} />
        <Route
          path="/notes/:id"
          element={<UserLayout children={<Notes />} />}
        />
        <Route
          path="/settings"
          element={<UserLayout children={<Settings />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
