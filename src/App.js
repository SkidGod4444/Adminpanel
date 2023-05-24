import Sidebar from "./components/SIDEBAR/Sidebar";
import Topbar from "./components/TOPBAR/Topbar";
import "./app.css";
import Home from "./pages/HOME/Home";


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
        </div>
    </div>
  );
}

export default App;
