import Navbar from "./components/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Experience from "./sections/experience.jsx";
import Projects from "./sections/projects.jsx";
import Contact from "./sections/contact.jsx";
import Footer from "./components/footer.jsx";
import "../src/index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
