import "./App.scss";
import Header from "./components/Header";
import SplineScene from "./components/SplineScene";

function App() {
  return (
    <>
      <SplineScene />
      <div className="app">
        <Header />
        <main>
          <h1 className="caption">
            {"{"} bring your <b>designs</b> into <br />
            the 3D space
          </h1>
          <span className="sub-caption">
            Embed your 3D models directly into your website or share them with a
            link. Our technology ensures they look great on any device.
          </span>
          <button>
            <span>Get started ~&gt;</span>
          </button>

          <div className="showcase">
            <div>~&gt;</div>
            <span>showcase</span>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
