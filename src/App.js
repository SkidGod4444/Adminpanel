import Sidebar from "./components/SIDEBAR/Sidebar";
import Topbar from "./components/TOPBAR/Topbar";
import "./app.css";


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        
        </div>
    </div>
  );
}

export default App;
