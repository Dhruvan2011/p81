canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "red"; 
ctx.lineWidth = 1;
ctx.rect(210,143,350,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue"; 
ctx.lineWidth = 5;
ctx.arc(310, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black"; 
ctx.lineWidth = 5;
ctx.arc(380, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "red"; 
ctx.lineWidth = 5;
ctx.arc(450, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "yellow"; 
ctx.lineWidth = 5;
ctx.arc(345, 270, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green"; 
ctx.lineWidth = 5;
ctx.arc(415, 270, 40 ,0 , 2*Math.PI);
ctx.stroke();