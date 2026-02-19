import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen font-body bg-white selection:bg-brand-teal selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
