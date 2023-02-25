function WorkPreviews(props){
    const projectData = props.projectData;
    return(
        projectData.map((item)=>
        <figure key={item.project}className="work-preview">
            <a href={item.link}><img src={item.img}/></a>
            <figcaption><a href={item.link}>{item.project}</a></figcaption>
            <ul className="tags-container">
                {item.tags.map(tag =>(
                    <li className="tag" key={tag}>{tag}</li>
                ))}
            </ul>
        </figure>
        )
    );
};

const projectData = [
    {
        img: "./assets/imgs/dodampreview.jpg",
        project: "Dodam: Design Your Baby",
        tags: ['UIUX', 'speculative'],
        link: "./work/dodam.html",
    },
    {
        img: "./assets/imgs/house.gif",
        project: "house",
        tags: ['play'],
        link: "./work/house.html",
    },
    // {
    //     img: "../imgs/dreammakerspreview.jpg",
    //     project: "83.333% Cooking",
    //     tags: ['graphic design', 'print'],
    //     link: "./work/83cooking.html",
    // },
    // {
    //     img: "./assets/imgs/rocketpreview.jpg",
    //     project: "Rocket",
    //     tags: ['UIUX', 'branding'],
    //     link: "./work/rocket.html",
    // },
    {
        img: "./assets/imgs/olympics_figureskate_1.png",
        project: "Olympics Infographics",
        tags: ['graphic design'],
        link: "./work/olympicsinfographics.html",
    },
    {
        img: "./assets/imgs/posepreview.jpg",
        project: "POSE",
        tags: ['branding', 'graphic design'],
        link: "./work/pose.html",
    },
    {
        img: "./assets/imgs/forest_preview.gif",
        project: "A Forest Clearing",
        tags: ['code','play'],
        link: "./work/forestclearing.html",
    },
    // {
    //     img: "./assets/imgs/dreammakerspreview.jpg",
    //     project: "Dream Makers",
    //     tags: ['code','play'],
    //     link: "./work/dreammakers.html",
    // },
    // {
    //     img: "./assets/imgs/qpreview.png",
    //     project: "Q-Sweeper",
    //     tags: ['code', 'play'],
    //     link: "./work/qsweeper.html",
    // },
    // {
    //     img: "./assets/imgs/ecampreview.png",
    //     project: "Experimental Camera",
    //     tags: ['code'],
    //     link: "./work/experimentalcamera.html",
    // },
    
];

const workRoot = ReactDOM.createRoot(document.getElementById('work-root'));

workRoot.render(
    <WorkPreviews projectData = {projectData}/>
);