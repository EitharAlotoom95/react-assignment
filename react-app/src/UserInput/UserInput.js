import React from "react"
const UserInput = (props) => {
    const styling = {
        width:'30%',
        border: '2px solid ivory' ,
        height:' 20px',
        color: "#4a54f1",
        textAlign: "center",
        fontSize: 14,
        fontFamily:'Lucida Console',
        background: 'transparent',
        borderRadius:'75 px',
        
        
    };
    return <input style ={styling} type='text' onChange={props.changed} value ={props.currentName} /> 
            
    

};

export default UserInput;
