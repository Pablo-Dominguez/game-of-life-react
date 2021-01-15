
import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        "& .PrivateNotchedOutline-legendLabelled-6": {
        width: props => props.gapSize,
        }
    }
});

// const useOtherStyles = makeStyles({
//     class1: {
//         root: {
//             "& .PrivateNotchedOutline-legendLabelled-4": {
//             width: "50px"
//             }
//         }},
//     class2: {
//         root: {
//             "& .PrivateNotchedOutline-legendLabelled-4": {
//             width: "35px"
//             }
//         }}
// });



// class TellThis extends React.Component {
function TellThis(props) {
    

    const classes = useStyles(props);
    console.log(classes);
//     const other_classes = useOtherStyles();
    
    
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
            props.setText(e.target.value);
        };

//     const onTextInput = (text) => {
//         setText(text)
//     };

    //  block of code to be executed if the condition is true
        return (
        <form className="campo" noValidate autoComplete="off">
            <TextField className={classes.root} onChange={handleTextChange} id="outlined-basic" label={props.placeholder} variant="outlined" />
        </form>
        );
//     } else {
//     //  block of code to be executed if the condition is false
//         return (
//         <form className="campo" noValidate autoComplete="off">
//             <TextField className={classes.root} onChange={handleTextChange} id="outlined-basic" label={placeholder} variant="outlined" />
//         </form>
//         );
//     };

};

export default TellThis;
