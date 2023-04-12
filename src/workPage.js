// import React from 'react';
// import ReactDOM from 'react-dom';

function TOC(props){
    return(
        <div id="toc">
            <ul>
                <li><h2>Contents</h2></li>
                {props.toc.map(toc =>(
                    <li id={"#"+toc} key={toc}><a href={"#"+toc}>{toc}</a></li>
                ))}
            </ul>
        </div>
    );
};

function Header(props){
    return(
        <React.Fragment>
            <figure>
                <img id="header-img" src={props.header.img}/>
            </figure>
            <h1>{props.header.project}</h1>
            <h2>{props.header.year}</h2>
            <div className="tags-container">
                {props.header.tags.map(tag =>(
                    <h2 className="tag" key={tag}>{tag}</h2>
                ))}         
            </div>
            <p>{props.header.description}</p>
            <p>Time: {props.header.time}</p>
        </React.Fragment>
    );
};

const workData=[
    {
        toc:["description", "research-concept", "moodboard-gestural", "user-flow-chart", "hero-flow", "key-screens", "user-interviews", "design-system", "wireframes", "final-contents"],
        header:{
            img: "../assets/imgs/dodam_header.jpg",
            project: "dodam",
            year: "2022",
            tags: ['UIUX', 'speculative'],
            description: "What would a dystopian future look like where gene editing becomes common place, specifically in the pregnancy process? Dodam is a (speculative) app that imagines a more streamlined process to gene editing in this dystopian future for healthier and more special babies, being designed within the possibilities of one’s genome.",
            time: "7 weeks",
        },
    },
    {
        toc:["description", "images"],
        header:{
            img: "../assets/imgs/house_header.gif",
            project: "house",
            year: "2022",
            tags: ['play'],
            description: "A hyperlink text adventure made with ASCII art. Littered with funny friends, playful interactions, and interesting discoveries.",
            time: "3 days",
        },
    },
    {
        toc:["#escription", "process"],
        header:{
            img: "../assets/imgs/pose_presentation21.jpg",
            project: "rocket",
            year: "2022",
            tags: ['uiux', 'branding'],
            description: "When craving ice cream, you often search for specific flavorsRocket is a concept app that allows you to find, build, and get any ice cream by flavor from anywhere in the country.",
            time: "7 weeks",

        },
    },
    {
        toc:["description", "moodboard-concept", "final-images"],
        header:{
            img: "../assets/imgs/olympics_header.png",
            project: "olympics infographics",
            year: "2022",
            tags: ['graphic design',],
            description: "Documenting and visualizing Champions at the Beijing 2022 Winter Olympics with Instagram-style square panels. Covers Ice Hockey: Women's Gold Medal Game, Figure Skaing: Mixed Pairs, Snowboard: Men's Big Air, and Biathalon: Men's 15km Mass Start.",
            time: "2 weeks",

        },
    },
    {
        toc:["description", "research", "concept", "brand-strategy", "visual-identity", "verbal-identity", "style-frames", "applications",],
        header:{
            img: "../assets/imgs/pose_presentation21.jpg",
            project: "pose",
            year: "2021",
            tags: ['branding', 'graphic design'],
            description: "POSE is a fictional brand creating an inviting culture around photography for those swept up by the fast-paced modern society by offering affordable and accessible film and cameras. POSE allows you to slow down, take a break, and appreciate the smaller moments in life. Developed as a competitor to Kodak.",
            time: "10 weeks",
        },
    },
    {
        toc:["description", "concept", "rules-instructions", "images",],
        header:{
            img: "../assets/imgs/forest_header.png",
            project: "a forest clearing",
            year: "2022",
            tags: ['code', 'play'],
            description: "A FOREST CLEARING is a collaborative multiplayer experience played online in the broswer. You play by working with others to grow and maintain as large a forest as you can while lumberjack NPCs cut your trees down. Created for a game jam with the theme OUT OF CONTROL.",
            time: "2 weeks",
        },
    },
    {
        toc:["description", "images",],
        header:{
            img: "../assets/imgs/expcam_header.gif",
            project: "experimental camera",
            year: "2021",
            tags: ['code'],
            description: "Playing with the webcam and face tracking to make an experimental camera. This project allows the user to draw on the canvas by placing different colored objects in front of the camera, and even with their own face. The camera works best on desktop.",
            time: "2 weeks ✿",
        },
    },
]

const dodam = document.getElementById("dodam");
const house = document.getElementById("house");
const rocket = document.getElementById("rocket");
const olympics = document.getElementById("olympics");
const pose = document.getElementById("pose");
const forest = document.getElementById("forest");
const expcam = document.getElementById("expcam");

const projs = [dodam, house, rocket, olympics, pose, forest, expcam];
const projNames = ["dodam", "house", "rocket", "olympics", "pose", "forest", "expcam"];

for(let i=0;i<projs.length;i++){
    if(projs[i]){
        const tocRoot = ReactDOM.createRoot(document.getElementById(`toc`));
        const headerRoot = ReactDOM.createRoot(document.getElementById(`description`));

        tocRoot.render(
            <TOC
            toc = {workData[i].toc}
            />
        );
        headerRoot.render(
            <Header
            header={workData[i].header}
            />
        );
        
    };
};