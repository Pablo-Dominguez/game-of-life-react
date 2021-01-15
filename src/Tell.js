
import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';

// class TellThis extends React.Component {
function TellThis({value,setText}) {
    const [text,setHandler] = useState("");
//     const this.value = "pla";
    
    // define callback function to fetch data
    
//     someFn = () => {
//         const text = "holoholo";
//         this.props.callbackFromParent(text);
//     };
//     
    
    // define variables
/*    constructor(){
      super();
      this.value = "Placeholder";
   };
       */ 
    const handleTextChange = (e) => {
            console.log(e.target.value);
            setHandler(e.target.value);
            setText(e.target.value);
        };

//     const onTextInput = (text) => {
//         setText(text)
//     };
    
    return (
        <form className="campo" noValidate autoComplete="off">
            <TextField onChange={handleTextChange} id="outlined-basic" label="Placeholder" variant="outlined" />
        </form>
    );

};

export default TellThis;
