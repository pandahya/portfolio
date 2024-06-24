// import React from 'react';
// import ReactDOM from 'react-dom';

let allProjects = document.querySelectorAll(".work-preview");
console.log(allProjects);

function WorkPreviews(props) {
    const projectData = props.projectData;
    return projectData.map((item) => (
        <div
            key={item.project}
            className={
                "work-preview" +
                " " +
                "stack-card" +
                " " +
                item.tags[0] +
                " " +
                item.tags[1]
            }
        >
            <a href={item.link}>
                <img className="preview-img" src={item.img} />
            </a>
            <div className="preview-text">
                <a href={item.link}>
                    <h1 className="preview-title">{item.project}</h1>
                </a>

                <ul className="tags-container">
                    {item.tags.map((tag) => (
                        <li className={"tag " + tag} key={tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <p className="preview-description">{item.desc}</p>
                <a href={item.link}>
                    <h2 className="action-link">view project ↗</h2>
                </a>
            </div>
        </div>
    ));
}

const projectData = [
    {
        img: "./assets/imgs/entropy_preview.png",
        project: "Entropy Website Design",
        tags: ["webdesign"],
        link: "./work/entropy.html",
        desc: "Designing the website for the Parsons Design & Technology 2023 Thesis showcase.",
    },
    // {
    //     img: "./assets/imgs/dodampreview.jpg",
    //     project: "Dodam: Design Your Baby",
    //     tags: ["uiux", "speculative"],
    //     link: "./work/dodam.html",
    // },
    // {
    //     img: "./assets/imgs/recipebook_preview.png",
    //     project: "Recipe Book",
    //     tags: ["graphic"],
    //     link: "./work/recipebook.html",
    // },
    // {
    //     img: "./assets/imgs/house.gif",
    //     project: "house",
    //     tags: ['play'],
    //     link: "./work/house.html",
    // },
    // {
    //     img: "../imgs/dreammakerspreview.jpg",
    //     project: "83.333% Cooking",
    //     tags: ['graphic design', 'print'],
    //     link: "./work/83cooking.html",
    // },
    {
        img: "./assets/imgs/icecream_preview.png",
        project: "Find My Ice Cream",
        tags: ["uiux", "branding"],
        link: "./work/icecream.html",
        desc: "A unique ice cream locating app for ice cream connoisseurs that puts the focus on flavor rather than brand.",
    },
    // {
    //     img: "./assets/imgs/olympics_figureskate_1.png",
    //     project: "Olympics Infographics",
    //     tags: ["graphic"],
    //     link: "./work/olympicsinfographics.html",
    // },
    {
        img: "./assets/imgs/pose_preview.png",
        project: "POSE",
        tags: ["branding", "graphic"],
        link: "./work/pose.html",
        desc: "A youthful film photography brand looking to revitalize the art of everyday photography.",
    },
    // {
    //     img: "./assets/imgs/forest_preview.gif",
    //     project: "A Forest Clearing",
    //     tags: ['code','play'],
    //     link: "./work/forestclearing.html",
    // },
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
    //     img: "./assets/imgs/expcam_preview.png",
    //     project: "Experimental Camera",
    //     tags: ['code'],
    //     link: "./work/experimentalcamera.html",
    // },
];

const workRoot = ReactDOM.createRoot(document.getElementById("work-root"));

workRoot.render(<WorkPreviews projectData={projectData} />);
