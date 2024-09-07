// import { Navbar } from './components/Navbar';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import EmailForm from "./components/EmailForm";

function App() {
  return (
    <div className="">
      {/* <Sidebar /> */}
      <Home />
      <About />

      {/* <EmailForm /> */}
    </div>
  );
}

export default App;
