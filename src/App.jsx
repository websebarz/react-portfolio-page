import "./App.css";
import "./index.css";
import Intro from "./comps/Intro";
import Header from "./comps/Header";
import Services from "./comps/Services";
import About from "./comps/About";
import Footer from "./comps/Footer";

function App() {
  return (
    <div className="bg-slate-900">
      <Header />
      <Intro />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
