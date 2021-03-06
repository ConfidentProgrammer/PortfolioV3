import "./App.css";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Email from "./components/Email";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Title from "./components/Title";
import Work from "./components/Work";
import WorksMain from "./components/WorksMain";
import RandomShape from "./components/RandomShape";
import FeaturedProjectMain from "./components/FeaturedProjectMain";
import SocialMobile from "./components/SocialMobile";
import ExtraWorkMain from "./components/ExtraWorkMain";
function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />

      <RandomShape T={100} L={900} />
      <RandomShape T={1700} L={800} />
      <RandomShape T={800} L={300} />

      <Email
        right={-150}
        bottom={110}
        content={"deep.canada29@gmail.com"}
        url={"mailto:"}
      />
      <SocialLinks />
      <About />
      <Title title={"Experience"} number={"02."} width={230} />
      <WorksMain />
      <Title title={"Featured Projects"} number={"03."} width={130} />
      <FeaturedProjectMain />

      <ExtraWorkMain />
      <SocialMobile />
    </div>
  );
}

export default App;
