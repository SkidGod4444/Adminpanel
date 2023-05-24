import Sidebar from "./components/SIDEBAR/Sidebar";
import Topbar from "./components/TOPBAR/Topbar";
import "./app.css";
import Home from "./pages/HOME/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/USERLIST/UserList";
import User from "./pages/USER/User";
import NewUser from "./pages/NEWUSER/NewUser";
import ProductList from "./pages/PRODUCTSLIST/ProductList";


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
          <Route path="/NewUserSpawned" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
