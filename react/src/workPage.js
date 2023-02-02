function TOC(props){
    return(
        <div id="toc">
            <ul>
                {props.toc.map(toc =>(
                    <li id={toc} key={toc}><a href={toc}>{toc}</a></li>
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
        toc:["#description", "#research-concept", "#moodboard-gestural", "#user-flow-chart", "#hero-flow", "#key-screens", "#user-interviews-testing", "#design-system", "#wireframes", "#final-contents"],
        header:{
            img: "../assets/imgs/dodam_header.jpg",
            project: "dodam",
            year: "2022",
            tags: ['UIUX', 'speculative'],
            description: "What would a dystopian future look like where gene editing becomes common place, specifically the pregnancy process? Dodam is an app that imagines a more streamlined process to gene editing in this dystopian future for healthier and more special babies, being designed within the possibilities of one’s genome.",
            team: "Jennie Hong, Hyacinth Weng, Jonghee Jung",
            time: "7 weeks",
        },
    },
    {
        toc:["#description", "#images"],
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
        toc:["#description", "#process"],
        header:{
            img: "../assets/imgs/pose_presentation21.jpg",
            project: "rocket",
            year: "2022",
            tags: ['uiux', 'branding'],
            description: "this is a description",
            time: "1 week",

        },
    },
    {
        toc:["#description", "#moodboard-concept", "#final-images"],
        header:{
            img: "../assets/imgs/pose_presentation21.jpg",
            project: "olympics infographics",
            year: "2022",
            tags: ['graphic design',],
            description: "Documenting and visualizing Champions at the Beijing 2022 Winter Olympics with Instagram-style square panels. Covers Ice Hockey: Women's Gold Medal Game, Figure Skaing: Mixed Pairs, Snowboard: Men's Big Air, and Biathalon: Men's 15km Mass Start.",
            time: "2 weeks",

        },
    },
    {
        toc:["#description", "#process"],
        header:{
            img: "../assets/imgs/pose_presentation21.jpg",
            project: "pose",
            year: "2022",
            tags: ['branding', 'graphic design'],
            description: "this is a description",
            time: "1 week",
        },
    },
]

const dodam = document.getElementById("dodam");
const house = document.getElementById("house");
const rocket = document.getElementById("rocket");
const olympics = document.getElementById("olympics");
const pose = document.getElementById("pose");

const projs = [dodam, house, rocket, olympics, pose];
const projNames = ["dodam", "house", "rocket", "olympics", "pose"];

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