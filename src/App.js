import Navigator from "./components/nav/Navigator";
import Home from "./components/home/Home";
import Description from "./components/description/Description";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import SocialBar from "./components/socialBar/SocialBar";
function App() {
  return (
    <div className="app" data-spy="scroll" data-target="#nav" data-offset="0">
      <Navigator />
      <SocialBar />
      <Home />
      <Description />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
