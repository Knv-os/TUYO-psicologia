import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import SectionBanner from "./components/SectionBanner";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionBanner />
      <SectionTitle />
    </>
  );
}

export default App;
