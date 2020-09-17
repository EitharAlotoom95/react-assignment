import React from "react"
const UserInput = (props) => {
    const styling = {
        border: '3px solid red'
    };
    return <input style ={styling} type='text' onChange={props.changed} value ={props.currentName} /> 
            
    

};

export default UserInput;
