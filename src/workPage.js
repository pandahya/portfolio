// import React from 'react';
// import ReactDOM from 'react-dom';

// function TOC(props) {
//     return (
//         // <div id="toc" className="mobile-hide">
//         <ul>
//             <li>
//                 <h2>Contents</h2>
//             </li>
//             {props.toc.map((toc) => (
//                 <li id={"#" + toc} key={toc}>
//                     <a href={"#" + toc}>{toc}</a>
//                 </li>
//             ))}
//         </ul>
//         // </div>
//     );
// }

// function Header(props) {
//     return (
//         <React.Fragment>
//             <figure>
//                 <img id="header-img" src={props.header.img} />
//             </figure>
//             <h1>{props.header.project}</h1>
//             <h2>{props.header.year}</h2>
//             <div className="tags-container">
//                 {props.header.tags.map((tag) => (
//                     <h3 className={"tag " + tag} key={tag}>
//                         {tag}
//                     </h3>
//                 ))}
//             </div>
//             <p>{props.header.description}</p>
//             <p>Time: {props.header.time}</p>
//         </React.Fragment>
//     );
// }

function Header(props) {
    return (
        <React.Fragment>
            <div id="header-info">
                <div id="line1">
                    <h1>{props.header.project}</h1>
                    <h1>{props.header.year}</h1>
                </div>
                <div id="line2">
                    <div className="tags-container">
                        {props.header.tags.map((tag) => (
                            <h2 className={"tag " + tag} key={tag}>
                                {tag}
                            </h2>
                        ))}
                    </div>
                    <h3 id="work-type">{props.header.type}</h3>
                </div>
            </div>
            <figure>
                <img id="header-img" src={props.header.img} />
            </figure>
        </React.Fragment>
    );
}
const workData = [
    {
        toc: ["description", "images"],
        header: {
            img: "../assets/imgs/house_header.gif",
            project: "hungry",
            year: "2022-",
            tags: ["play"],
            description:
                "A web journey through how I feel hunger, navigating through choices, options, more options, indecision, and distraction.",
            time: "ongoing",
        },
    },
    {
        toc: ["description", "project", "components", "wireframes"],
        header: {
            img: "../assets/imgs/entropy_header.png",
            project: "Entropy Website Design",
            year: "2023",
            tags: ["webdesign"],
            type: "@ Parsons School of Design",
            description:
                "Designing the website for the Parsons Design & Technology 2023 Thesis showcase.",
            time: " 2 months",
        },
    },
    {
        toc: ["description", "ui-design"],
        header: {
            img: "../assets/imgs/dodam_header.jpg",
            project: "the artifex [in progress]",
            year: "2023",
            tags: ["play", "narrative"],
            description:
                "My senior thesis project. A narrative game about trash as a storytelling medium, set in a fictional post-apocalyptic world.",
            time: " 7.5 months, in progress",
        },
    },
    {
        toc: [
            "description",
            "research-concept",
            "moodboard-gestural",
            "user-flow-chart",
            "hero-flow",
            "key-screens",
            "user-interviews",
            "design-system",
            "wireframes",
            "final-contents",
        ],
        header: {
            img: "../assets/imgs/dodam_header.jpg",
            project: "dodam",
            year: "2022",
            tags: ["uiux", "speculative"],
            description:
                "What would a dystopian future look like where gene editing becomes common place, specifically in the pregnancy process? Dodam is a (speculative) app that imagines a more streamlined process to gene editing in this dystopian future for healthier and more special babies, being designed within the possibilities of one’s genome.",
            time: "7 weeks",
        },
    },
    {
        toc: ["description", "83%cooking", "recipe", "colophon"],
        header: {
            img: "../assets/imgs/recipebook_header.png",
            project: "recipe book",
            year: "2022",
            tags: ["graphic"],
            description:
                "Designing, printing, and binding pages for a class recipe book. The book is ~8in x 8in, printed on cover weight paper and bound with drum leaf binding. Each member of the class created a spread for a recipe of their choice and used a Vandercook letterpress.",
            time: "3 weeks",
        },
    },
    {
        toc: ["description", "images"],
        header: {
            img: "../assets/imgs/house_header.gif",
            project: "house",
            year: "2022",
            tags: ["play"],
            description:
                "A hyperlink text adventure made with ASCII art. Littered with funny friends, playful interactions, and interesting discoveries.",
            time: "3 days",
        },
    },
    {
        toc: ["description", "research", "concept", "screens"],
        header: {
            img: "../assets/imgs/icecream_mockup2.jpg",
            project: "find my ice cream",
            year: "2022",
            tags: ["uiux", "branding"],
            description:
                "When craving ice cream, trying to locate specific flavors can be tough. Find My Ice Cream makes hunting for that one specific flavor seamless and easy. The app puts the focus on ice cream flavors rather than brand or store. Search for flavors you crave, discover new tastes, and find exactly where to get it all.",
            time: "7 weeks",
        },
    },
    {
        toc: ["description", "moodboard-concept", "final-images"],
        header: {
            img: "../assets/imgs/olympics_header.png",
            project: "olympics infographics",
            year: "2022",
            tags: ["graphic"],
            description:
                "Documenting and visualizing Champions at the Beijing 2022 Winter Olympics with Instagram-style square panels. Covers Ice Hockey: Women's Gold Medal Game, Figure Skaing: Mixed Pairs, Snowboard: Men's Big Air, and Biathalon: Men's 15km Mass Start.",
            time: "2 weeks",
        },
    },
    {
        toc: [
            "description",
            "research",
            "concept",
            "brand-strategy",
            "visual-identity",
            "verbal-identity",
            "style-frames",
            "applications",
        ],
        header: {
            img: "../assets/imgs/pose_presentation21.jpg",
            project: "pose",
            year: "2021",
            tags: ["branding", "graphic"],
            description:
                "POSE is a fictional brand creating an inviting culture around photography for those swept up by the fast-paced modern society by offering affordable and accessible film and cameras. POSE allows you to slow down, take a break, and appreciate the smaller moments in life. Developed as a competitor to Kodak.",
            time: "10 weeks",
        },
    },
    {
        toc: ["description", "concept", "rules-instructions", "images"],
        header: {
            img: "../assets/imgs/forest_header.png",
            project: "a forest clearing",
            year: "2022",
            tags: ["code", "play"],
            description:
                "A FOREST CLEARING is a collaborative multiplayer experience played online in the broswer. You play by working with others to grow and maintain as large a forest as you can while lumberjack NPCs cut your trees down. Created for a game jam with the theme OUT OF CONTROL.",
            time: "2 weeks",
        },
    },
    {
        toc: ["description", "images"],
        header: {
            img: "../assets/imgs/expcam_header.gif",
            project: "experimental camera",
            year: "2021",
            tags: ["code"],
            description:
                "Playing with the webcam and face tracking to make an experimental camera. This project allows the user to draw on the canvas by placing different colored objects in front of the camera, and even with their own face. The camera works best on desktop.",
            time: "2 weeks ✿",
        },
    },
];
const hungry = document.getElementById("hungry");
const entropy = document.getElementById("entropy");
const artifex = document.getElementById("artifex");
const dodam = document.getElementById("dodam");
const recipebook = document.getElementById("recipebook");
const house = document.getElementById("house");
const icecream = document.getElementById("icecream");
const olympics = document.getElementById("olympics");
const pose = document.getElementById("pose");
const forest = document.getElementById("forest");
const expcam = document.getElementById("expcam");

const projs = [
    hungry,
    entropy,
    artifex,
    dodam,
    recipebook,
    house,
    icecream,
    olympics,
    pose,
    forest,
    expcam,
];
const projNames = [
    "hungry",
    "entropy",
    "artifex",
    "dodam",
    "recipebook",
    "house",
    "icecream",
    "olympics",
    "pose",
    "forest",
    "expcam",
];

for (let i = 0; i < projs.length; i++) {
    if (projs[i]) {
        // const tocRoot = ReactDOM.createRoot(document.getElementById(`toc`));
        const headerRoot = ReactDOM.createRoot(
            //id=header used to be id=description
            document.getElementById(`header`)
        );

        // tocRoot.render(<TOC toc={workData[i].toc} />);
        headerRoot.render(<Header header={workData[i].header} />);
    }
}
