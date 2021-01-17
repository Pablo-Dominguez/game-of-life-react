import logo from './logo.svg';
import './App.css';
import SayThis from "./Say.js";
import TellThis from "./Tell.js";
import Canvas from './Canvas'
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
    const [value,setText] = React.useState("");
    

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <div className="row" style={{marginTop: '5%', textAlign: 'center'}} >
                        <a href="/" style={{color: "#bfbfbf", textDecoration: "none"}}>
                        <h1>Game of life</h1>
                        <h6>Go find yourself!</h6>
                        </a>
                    </div>
                </div>
                <div className="row" style={{marginTop: "3%"}}>
                    <TellThis gapSize="50px" value={value} setText={setText} placeholder = "Columns"/>
                    <TellThis gapSize="35px" value={value} setText={setText} placeholder = "Rows"/>
                </div> 
                <SayThis text={value}/> 
                <Canvas rows="30"/>
            </header>
        </div>
  );
}

export default App;
