import "./App.css";
import "./index.css";
import Intro from "./comps/Intro";
import Header from "./comps/Header";
import Services from "./comps/Services";
import About from "./comps/About";
import Footer from "./comps/Footer";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  function toggle() {
    setClicked((prevState) => !prevState);
  }
  return (
    <div className="bg-slate-900">
      <Header clicked={clicked} toggle={toggle} />
      <Intro />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
