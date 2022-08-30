import "./App.css";
import "./index.css";
import Intro from "./comps/Intro";
import Header from "./comps/Header";
import Services from "./comps/Services";

function App() {
  return (
    <div className="bg-slate-900">
      <Header />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
