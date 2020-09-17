//import React, {Component} from "react";
import React from 'react'
import "./UserOutput.css"
const UserOutput = (props) => {
    return(
        <div className="UserOutput">
        <p >userName :{props.userName} </p>       
        {/* the name userName should be like te name UserName in App.js in line 22 */}
        <p >I hope it will work</p>
        </div>
    )
    
}

export default UserOutput;