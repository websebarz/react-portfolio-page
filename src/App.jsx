import "./App.css";
import "./index.css";
import Intro from "./comps/Intro";
import Header from "./comps/Header";

function App() {
  return (
    <div className="bg-slate-900">
      <Header />
      <Intro />
    </div>
  );
}

export default App;
