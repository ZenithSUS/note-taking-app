import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserLayout } from "./layouts/user-layout";
import { AuthLayout } from "./layouts/auth-layout";
import { Login } from "./navigation/login";
import { Register } from "./navigation/register";
import { Dashboard } from "./navigation/dashboard";
import { Notes } from "./navigation/notes";
import { Settings } from "./navigation/settings";
import './tailwind.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout children={<Dashboard />}/>} />
        <Route path="/login" element={<AuthLayout children={<Login />} />} />
        <Route path="/register" element={<AuthLayout children={<Register />} />} />
        <Route path="/notes" element={<UserLayout children={<Notes />} />} />
        <Route path="/settings" element={<UserLayout children={<Settings />} />} />
      </Routes>
    </Router>
  )
}

export default App;
