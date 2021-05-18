import "./App.css";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Email from "./components/Email";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />

      <Email
        right={-120}
        bottom={110}
        content={"deep.canada29@gmail.com"}
        url={"mailto:"}
      />
      <SocialLinks />
      <About />
    </div>
  );
}

export default App;
