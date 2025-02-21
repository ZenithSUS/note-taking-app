import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserLayout } from "./layouts/user-layout";
import { Dashboard } from "./navigation/dashboard";
import './tailwind.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout children={<Dashboard />} />} />
      </Routes>
    </Router>
  )
}

export default App;
