import Login from "./views/auth/login";
import Dashboard from "./views/Dashboard";
import {BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
              <Route path="/" element={<Login />}/>
              <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </Router>
  );
}

export default App;