import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Service from "./components/Service";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/get_started" element={<GetStarted />}/>
      </Routes>
    </div>
  );
}

export default App;
