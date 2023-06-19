// import React from 'react';
// import ReactDOM from 'react-dom';
let currentMode = sessionStorage.getItem("color-mode");
let modeText;
if(document.documentElement.getAttribute("color-mode")=="paper" || currentMode == "paper"){
    document.documentElement.setAttribute("color-mode", "paper");
    modeText = "you are in paper mode → switch to pixel mode";
}else if (document.documentElement.getAttribute("color-mode")=="pixel" || currentMode == "pixel"){
    document.documentElement.setAttribute("color-mode", "pixel");
    modeText = "you are in pixel mode → switch to paper mode";
}

// function Nav(props){
//     const openMenu=()=>{
//     }
//     return (
//         <React.Fragment>
//             <li><a href="./index.html">hyacinth weng <span className="flower">✿</span></a></li>
//             <li className="navbar"><a href="./work.html">work <span className="flower">✿</span></a></li>
//             <li className="navbar"><a href="./about.html">about <span className="flower">✿</span></a></li>
//             <button className="hamburger" onClick={()=>openMenu()}>
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M0 0H20V3.33333H0V0ZM0 8.33333H20V11.6667H0V8.33333ZM20 16.6667H0V20H20V16.6667Z" fill="white"/>
//                 </svg>
//             </button>
//         </React.Fragment>
//     );
// };

let menuOpen = false;
function Nav(props){
    const openMenu=()=>{
        let menu = document.getElementById("side-menu");
        if(menuOpen){
            menu.style.right = "-150px";
        }else if(!menuOpen){
            menu.style.right = "0px";
        }
        menuOpen = !menuOpen;
    }
    return(
        <React.Fragment>
            <ul id="navbar">
                <li><a href="./index.html">hyacinth weng <span className="mobile-show mobile-flower">✿</span><span className="flower">✿</span></a></li>
                <li className="navbar"><a href="./work.html">work <span className="flower">✿</span></a></li>
                <li className="navbar"><a href="./about.html">about <span className="flower">✿</span></a></li>
                <button className="hamburger" onClick={()=>openMenu()}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H20V3.33333H0V0ZM0 8.33333H20V11.6667H0V8.33333ZM20 16.6667H0V20H20V16.6667Z" fill="white"/>
                    </svg>
                </button>
            </ul>
            <ul id="side-menu">
                <li><a href="./index.html">home</a></li>
                <li className="hamburger"><a href="./work.html">work</a></li>
                <li className="hamburger"><a href="./about.html">about</a></li>
            </ul>
        </React.Fragment>
    )
}
//https://ryanfeigenbaum.com/dark-mode/
function Footer(){
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
    return(
        <React.Fragment>
            <li><button id="screenMode" onClick={()=>switchModes()}>{modeText}</button></li>
            <li id="timestamp">Last updated: 19 June 2023</li>
            {/* <li>NYC based (UTC-04:00)</li> */}
        </React.Fragment>
    );
};

const navRoot = ReactDOM.createRoot(document.getElementById('nav'));
const footerRoot = ReactDOM.createRoot(document.getElementById('footer'));

navRoot.render(<Nav/>);
footerRoot.render(<Footer/>);