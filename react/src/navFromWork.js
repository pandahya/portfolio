function WorkNav(props){
    return (
        <React.Fragment>
            <li><a href="../index.html">weng, hyacinth</a></li>
            <li><a href="../work.html">work</a></li>
            <li><a href="../about.html">about</a></li>
        </React.Fragment>
    );
};
function Footer(){
    return(
        <React.Fragment>
            <li>Last updated: 22 Jan 2023</li>
            <li>NYC based (UTC-04:00)</li>
        </React.Fragment>
    );
};

const navRoot = ReactDOM.createRoot(document.getElementById('nav'));
const footerRoot = ReactDOM.createRoot(document.getElementById('footer'));

navRoot.render(<WorkNav/>);
footerRoot.render(<Footer/>);