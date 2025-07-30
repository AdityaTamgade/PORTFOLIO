import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./pages/footer";
import Qualification from "./pages/Qualification";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Navbar />

      <Routes>
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
