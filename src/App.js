import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import MySkillset from "./components/MySkillset";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <MySkillset />
      <Contact />
   
    <Social/>
    </div>
  );
}

export default App;
