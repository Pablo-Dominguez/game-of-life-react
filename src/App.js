import logo from './logo.svg';
import './App.css';
import SayThis from "./Say.js";
import TellThis from "./Tell.js";
import React from "react";

// class App extends React.Component {
function App() {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             listDataFromChild: null
//         };    
//     };
//     
//     myCallback = (dataFromChild) => {
//         this.setState({ listDataFromChild: dataFromChild });
//     };
//     
//     otherFn = () => {
// //         [...within this other function now I still have access to this.state.listDataFromChild...]
//     }
    const [value,setText] = React.useState("Placeholder");
    

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            <TellThis value={value} setText={setText}/>
            <SayThis text={value}/>
        </header>
        </div>
  );
}

export default App;
