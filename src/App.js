import Sidebar from "./components/SIDEBAR/Sidebar";
import Topbar from "./components/TOPBAR/Topbar";
import "./app.css";
import Home from "./pages/HOME/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/USERLIST/UserList";
import User from "./pages/USER/User";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
