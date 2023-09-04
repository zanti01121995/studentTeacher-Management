import "./App.css";
import NavBar from "./Nav_bar/nav-bar";
import Content from "./content/content";
import Sidebar from "./side_bar/side-bar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
