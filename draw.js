const c = document.getElementById("draw");
const ctx = c.getContext('2d');

window.addEventListener('load', function(){
    c.addEventListener('mousemove', draw);
})
function draw(e){
    let xPos = event.clientX;
    let yPos = event.clientY;

    let canvLocation = c.getBoundingClientRect();
    let canvX = canvLocation.x;
    let canvY = canvLocation.y;

    let mouseX = xPos - canvX;
    let mouseY = yPos - canvY;

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    console.log('hi');
}