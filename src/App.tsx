import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateContext } from "./context/context-provider";
import { LoginLayout } from "./layouts/login-layout";
import { UserLayout } from "./layouts/user-layout";
import { Dashboard } from "./navigation/dashboard";
import { Notes } from "./navigation/notes";
import { Settings } from "./navigation/settings";
import './tailwind.css'

function App() {
  const { token } = useStateContext();

  return (
    <Router>
      <Routes>
        {token ? <Route path="/" element={<UserLayout children={<Dashboard />} />} /> : <Route path="/" element={<LoginLayout />} />}
        <Route path="/" element={<UserLayout children={<Dashboard />} />} />
        <Route path="/notes" element={<UserLayout children={<Notes />} />} />
        <Route path="/settings" element={<UserLayout children={<Settings />} />} />
      </Routes>
    </Router>
  )
}

export default App;
