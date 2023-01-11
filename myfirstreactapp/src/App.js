import logo from './logo.svg';
import './App.css';
import LoginComp from "./components/Login"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My New React File</h1>
       
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        
        <LoginComp/>
      </header>
      
    </div>
    
  );
}

export default App;
