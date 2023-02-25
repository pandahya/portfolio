const nav = document.getElementById('nav');
const portfolio = document.getElementById('portfolio-menu');
const portfolioList = document.getElementById('portfolio-list');
// const archive = document.getElementById('archive-menu');
// const archiveList = document.getElementById('archive-list');
const menuList = document.getElementById('menu-list');
const aboutMenu = document.getElementById('about-menu');

portfolio.addEventListener('mouseover', openMenu);
portfolioList.addEventListener('mouseover', openMenu);
menuList.addEventListener('mouseout', closeMenu);
aboutMenu.addEventListener('mouseover', closeMenu);
// archive.addEventListener('mouseover', openMenuA);
// archiveList.addEventListener('mouseover', openMenuA);
// archiveList.addEventListener('mouseout', closeMenu);

function openMenu(){
    nav.style.height="60vh";
    // archiveList.style.display = "none";
    portfolioList.style.display = "block";
    menuList.style.height = "50vh";
}

// function openMenuA(){
//     nav.style.height="30vh";
//     portfolioList.style.display = "none";
//     // archiveList.style.display = "block";
//     menuList.style.height = "20vh";
// }
function closeMenu(){
    nav.style.height="43px";
    portfolioList.style.display = "none";
    // archiveList.style.display = "none";
    menuList.style.height = "0px";
}