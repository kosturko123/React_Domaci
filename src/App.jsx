import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Galerija from "./pages/Galerija";
import FriendList from "./components/FriendList";
import SearchBar from "./components/SearchBar";

function App() {
 return(
  <Router>
    <div className="App">
      <Sidebar />
      <FriendList/>
      <SearchBar/>
      <Routes>
        <Route path = "/" element = {<Dashboard/>}/>
        <Route path = "/galerija" element = {<Galerija/>}/>
        <Route path = "/profil" element = {<Profil/>}/>
      </Routes>
    </div>
  </Router>
 );
}

export default App;
