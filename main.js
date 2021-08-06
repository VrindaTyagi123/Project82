canvas = document.getElementById("myCanvas")
ctx= canvas.getContext("2d");

color = "red";
width_of_the_line = 1;

var mouseEvent = "empty";

canvas.addEventListener("mouseDown", my_mousedown);

function my_mousedown(e)
{
color = document.getElementById("color").value;
width_of_the_line = document.getElementById("width_of_the_line").value;
mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseUp", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseLeave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseMove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
current_position_of_mouse_y=e.clientY - canvas.offsetLeft;

if(mouseEvent="mouseDown")

{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;


console.log("current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
}
}