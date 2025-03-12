import "./App.css";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSetion";
import Navbar from "./Navbar";
import TestimonialSection from "./TestimonialSection";
import WorkspaceSection from "./WorkspaceSection";

function App() {
  return (
    <div className="flex-col ">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <WorkspaceSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
