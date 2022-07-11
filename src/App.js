import { Route, Routes, Navigate, Link } from "react-router-dom";
import MainNavigation from "./components/Header/MainNavigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home /> <About /> <Skills /> <Portfolio /> <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
