import React from 'react'
import Logo from "../renderer/images/vscode.png"

export default function Appbar() {
    return (
        <div style={{width: "100%", backgroundColor: "#3c3c3c", height: "32px", paddingLeft: "10px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <img src={Logo} style={{height: "20px"}} />
            <span style={{color: "white", fontSize: "14px"}}>Visual Studio Code</span>
            <div style={{display: "flex"}}>
                <a className="nonCloseButton" style={{height: "32px", width: "46px", fontFamily: "MDL2", color: "white"}}>&#xE921;</a>
                <a className="nonCloseButton" style={{height: "32px", width: "46px", fontFamily: "MDL2", color: "white"}}>&#xE923;</a>
                <a className="closeButton" style={{height: "32px", width: "46px", fontFamily: "MDL2", color: "white"}}>&#xE8BB;</a>
            </div>
        </div>
    )
}
