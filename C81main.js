canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
var widthofline=1;
var mouseevent="empty";
var lastpositiony;
var lastpositionx;
var radius=10;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    widthofline=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseevent="mouseDown";
    
    
}
canvas.addEventListener("mousemove",my_mousemove);

function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function my_mousemove(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    if (mouseevent=="mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
        
        ctx.stroke()
    }
    lastpositiony=mouse_y;
    lastpositionx=mouse_x;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
  mouseevent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
  mouseevent="mouseleave";
}