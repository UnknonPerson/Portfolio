import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Achievements from "./components/Achivements/Achivements";
import CTA from "./components/CTA/CTA";


function App() {
  return (
    <div className="min-h-screen w-full bg-[#050709] text-white">

      <Navbar />

      <div className="flex w-full">

        <main className="min-w-0 flex-1">

          <Hero />

          <About />

          <Projects />

          <Skills />

          <Achievements />

          <CTA />

        </main>

      </div>

    </div>
  );
}

export default App;