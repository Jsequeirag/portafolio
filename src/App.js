import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Description from "./components/description/Description";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";
import SocialBar from "./components/socialBar/SocialBar";
function App() {
  return (
    <div className="app">
      <Header />
      <SocialBar />
      <Home />
      <Description />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
