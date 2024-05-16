import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./pages/Dashboard";
import "./css/pattern.css";
import "./css/layout.css";

function App() {
  return (
    <div className="">
      <Header />
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
