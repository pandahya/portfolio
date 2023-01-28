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
        <section id="description">
            <figure>
                <img id="header-img" src={props.header.img}/>
            </figure>
            <h1>{props.header.project}</h1>
            <h2>{props.header.year}</h2>
            <h2>{props.header.tags}</h2>
            <p>{props.header.description}</p>
        </section>
    );
};
function Process(props){
    return(
        <section id="process">
            <h1>Process</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Nibh venenatis cras sed felis eget velit aliquet. Purus in mollis nunc sed id semper risus. Dictum fusce ut placerat orci nulla. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Venenatis tellus in metus vulputate eu scelerisque. Habitant morbi tristique senectus et netus et. Pellentesque nec nam aliquam sem et tortor consequat id. Volutpat commodo sed egestas egestas fringilla. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Tellus rutrum tellus pellentesque eu tincidunt. Cursus risus at ultrices mi tempus imperdiet. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Porta non pulvinar neque laoreet suspendisse interdum. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Praesent semper feugiat nibh sed pulvinar proin. In hendrerit gravida rutrum quisque non tellus.
            </p>
            <p>
            Molestie ac feugiat sed lectus vestibulum mattis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Curabitur vitae nunc sed velit. Felis imperdiet proin fermentum leo vel orci porta. In massa tempor nec feugiat nisl. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Semper auctor neque vitae tempus quam pellentesque nec nam. Ut tortor pretium viverra suspendisse potenti nullam. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Diam donec adipiscing tristique risus nec feugiat in fermentum. In egestas erat imperdiet sed euismod nisi porta. Velit dignissim sodales ut eu sem.
            </p>
            <p>
            Ac feugiat sed lectus vestibulum mattis ullamcorper. Leo duis ut diam quam. Porttitor leo a diam sollicitudin. Pellentesque adipiscing commodo elit at imperdiet. A pellentesque sit amet porttitor eget dolor. Phasellus faucibus scelerisque eleifend donec. Ac ut consequat semper viverra nam libero justo. Vitae turpis massa sed elementum tempus. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Integer malesuada nunc vel risus commodo viverra maecenas. Risus pretium quam vulputate dignissim. At tellus at urna condimentum mattis pellentesque id. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Magna sit amet purus gravida quis blandit. Hac habitasse platea dictumst quisque sagittis purus.
            </p>
            <p>
            Ac feugiat sed lectus vestibulum mattis ullamcorper. Leo duis ut diam quam. Porttitor leo a diam sollicitudin. Pellentesque adipiscing commodo elit at imperdiet. A pellentesque sit amet porttitor eget dolor. Phasellus faucibus scelerisque eleifend donec. Ac ut consequat semper viverra nam libero justo. Vitae turpis massa sed elementum tempus. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Integer malesuada nunc vel risus commodo viverra maecenas. Risus pretium quam vulputate dignissim. At tellus at urna condimentum mattis pellentesque id. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Magna sit amet purus gravida quis blandit. Hac habitasse platea dictumst quisque sagittis purus.
            </p>
            <p>
            Ac feugiat sed lectus vestibulum mattis ullamcorper. Leo duis ut diam quam. Porttitor leo a diam sollicitudin. Pellentesque adipiscing commodo elit at imperdiet. A pellentesque sit amet porttitor eget dolor. Phasellus faucibus scelerisque eleifend donec. Ac ut consequat semper viverra nam libero justo. Vitae turpis massa sed elementum tempus. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Integer malesuada nunc vel risus commodo viverra maecenas. Risus pretium quam vulputate dignissim. At tellus at urna condimentum mattis pellentesque id. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Magna sit amet purus gravida quis blandit. Hac habitasse platea dictumst quisque sagittis purus.
            </p>
        </section>
    )
};

function Content(props){
    return(
        <section id="content">
            <Header header={props.header}/>
            <hr></hr>
            <Process/>
        </section>
    );
};


function Work(props){
    return(
        <React.Fragment>
            <TOC toc={props.toc}/>
            <Content header={props.header}/>
        </React.Fragment>
    );
};

const workData={
    toc:["#description", "#process"],
    header:{
        img: "../assets/imgs/pose_presentation21.jpg",
        project: "pose",
        year: "2022",
        tags: "words, words",
        description: "this is a description"
    }
}

const workRoot = ReactDOM.createRoot(document.getElementById("work"));
workRoot.render(
    <Work
    toc = {workData.toc}
    header={workData.header}
    />
);