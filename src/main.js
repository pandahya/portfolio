// import React from 'react';
// import ReactDOM from 'react-dom';

function Nav(props){
    return (
        <React.Fragment>
            <li><a href="./index.html">hyacinth weng <span className="flower">✿</span></a></li>
            <li><a href="./work.html">work <span className="flower">✿</span></a></li>
            <li><a href="./about.html">about <span className="flower">✿</span></a></li>
        </React.Fragment>
    );
};
//https://ryanfeigenbaum.com/dark-mode/
function Footer(){
    let modeText;
    let currentMode = sessionStorage.getItem("color-mode");
    const switchModes=()=>{
        if(document.documentElement.getAttribute("color-mode")=="paper"){
            document.documentElement.setAttribute("color-mode", "pixel");
            document.getElementById("screenMode").innerHTML = "you are in pixel mode &rarr; switch to paper mode";
            sessionStorage.setItem("color-mode", "pixel");
        }else if(document.documentElement.getAttribute("color-mode")=="pixel"){
            document.documentElement.setAttribute("color-mode", "paper");
            document.getElementById("screenMode").innerHTML = "you are in paper mode &rarr; switch to pixel mode";
            sessionStorage.setItem("color-mode", "paper");
        }
    }
    if(document.documentElement.getAttribute("color-mode")=="paper" || currentMode == "paper"){
        document.documentElement.setAttribute("color-mode", "paper");
        modeText = "you are in paper mode → switch to pixel mode";
    }else if (document.documentElement.getAttribute("color-mode")=="pixel" || currentMode == "pixel"){
        document.documentElement.setAttribute("color-mode", "pixel");
        modeText = "you are in pixel mode → switch to paper mode";
    }
    return(
        <React.Fragment>
            <li><button id="screenMode" onClick={()=>switchModes()}>{modeText}</button></li>
            <li>Last updated: 13 April 2023</li>
            {/* <li>NYC based (UTC-04:00)</li> */}
        </React.Fragment>
    );
};

const navRoot = ReactDOM.createRoot(document.getElementById('nav'));
const footerRoot = ReactDOM.createRoot(document.getElementById('footer'));

navRoot.render(<Nav/>);
footerRoot.render(<Footer/>);