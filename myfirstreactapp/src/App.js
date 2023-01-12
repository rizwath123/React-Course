// import logo from './logo.svg';
import './App.css';
// import LoginComp from "./components/Login"
// import FunctioanlComponent from "./components/FunctioanlComponent"
// import ClassComponent from "./components/ClassComponent"
// import {CC} from "./components/NamedExportComp"
// import ClickComp from './components/HOrdComp and PureComp/Click'
// import Counter from './components/HOrdComp and PureComp/Counter'
import ParentComp from './components/HOrdComp and PureComp/ParentComp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My New React File</h1>
       {/* <FunctioanlComponent/>
       <ClassComponent/>
       <CC/> */}
       {/* <ClickComp/>
       <Counter/> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <ParentComp/>
        {/* <LoginComp/> */}
      </header>
      
    </div>
    
  );
}

export default App;
