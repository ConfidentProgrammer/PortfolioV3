import "./App.css";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Email from "./components/Email";
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />

      <Email
        right={-90}
        bottom={110}
        content={"deep.canada29@gmail.com"}
        url={"mailto:"}
      />
      <SocialLinks />
    </div>
  );
}

export default App;
