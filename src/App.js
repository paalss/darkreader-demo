import logo from "./logo.svg";
// import DarkreaderSwitch from "./DarkreaderSwitch";
import DarkreaderSwitch2 from "./DarkreaderSwitch2"
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <DarkreaderSwitch /> */}
      <DarkreaderSwitch2 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://react-darkreader.vercel.app/">https://react-darkreader.vercel.app/</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>AAAAA</p>
        <p style={{ width: "100px", height: "100px", background: "#000" }}></p>
        <p style={{ width: "100px", height: "100px", background: "#eee" }}></p>
        <p style={{ width: "100px", height: "100px", background: "#000" }}></p>
        <p style={{ width: "100px", height: "100px", background: "#eee" }}></p>
        <p style={{ width: "100px", height: "100px", background: "#000" }}></p>
        <p style={{ width: "100px", height: "100px", background: "#eee" }}></p>
      </header>
      
    </div>
  );
}

export default App;
