// function WorkPreview(props){
//     return(
//         <figure className="work-preview">
//             <img src="../imgs/frogspreview.png"/>
//             <figcaption>project name</figcaption>
//             <ul className="work-tags">
//                 <li>uiux</li>
//                 <li>branding</li>
//             </ul>
//         </figure>
        
//     );
// };
function WorkPreview(props){
    return(
        <figure className="work-preview">
            <img src={props.img}/>
            <figcaption>{props.project}</figcaption>
            <ul className="work-tags">
                {props.tags.map(tag =>(
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </figure>
        
    );
};

function AllPreviews(props){
    return(
        <React.Fragment>
            <WorkPreview img={props.img.a} project={props.project.a} tags={props.tags.a}/>
            <WorkPreview img={props.img.b} project={props.project.b} tags={props.tags.b}/>
            {/* <WorkPreview/>
            <WorkPreview/>
            <WorkPreview/>
            <WorkPreview/>
            <WorkPreview/>
            <WorkPreview/>
            <WorkPreview/> */}
        </React.Fragment>
    )
};

const previewData = {
    img:{
        a: "../imgs/frogspreview.png",
        b: "../imgs/dreammakerspreview.jpg"
    },
    project:{
        a: 'click for frogs',
        b: 'dream makers'
    },
    tags:{
        a: ['code', 'play'],
        b: ['uiux', 'branding']
    }
}

const workPreview = <AllPreviews 
    img={previewData.img}
    project={previewData.project}
    tags={previewData.tags}
    />;
const workRoot = ReactDOM.createRoot(document.getElementById('work-root'));

workRoot.render(
    <AllPreviews 
    img={previewData.img}
    project={previewData.project}
    tags={previewData.tags}
    />
);