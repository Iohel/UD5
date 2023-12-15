let canvas;
let context;

var sales = 
    [{
        product: "Basketballs",
        units: 150
    }, 
    {
        product: "Baseballs",
        units: 125
    }, 
    {
        product: "Footballs",
        units: 300
    }];

canvas = document.getElementById('basic-shapes-canvas');
ctx = canvas.getContext('2d');

// Always save context and restore at the end
ctx.save();

//Text
ctx.font = "20px Impact";
ctx.fillText("Units",40,240);
ctx.fillText("Product",350,460);
ctx.fillText("Basketballs",185,425);
ctx.fillText("Baseballs",310,425);
ctx.fillText("Footballs",435,425);
//Lines
let i = 120;
ctx.beginPath();
ctx.lineWidth = 1;
ctx.lineTo(160,25);
ctx.lineTo(165,20);
ctx.lineTo(170,25);
ctx.moveTo(165,20);
ctx.lineTo(165,400);
ctx.lineTo(725,400);
ctx.lineTo(720,395);
ctx.moveTo(725,400);
ctx.lineTo(720,405);



let my_gradient = ctx.createLinearGradient(0, 0, 125 , 0);
my_gradient.addColorStop(0, "#0066ff");
my_gradient.addColorStop(1, "white");
ctx.fillStyle=my_gradient;
ctx.fillRect(50,50,50,50)
my_gradient = ctx.createLinearGradient(0, 0, -125 , 0);
my_gradient.addColorStop(0, "#0066ff");
my_gradient.addColorStop(1, "white");

ctx.rotate(180 * Math.PI / 180);
ctx.fillStyle = "my_gradient";
ctx.fillRect(-270,-400,75,sales[0].units);
ctx.fillStyle = "#0066ff";
ctx.fillRect(-390,-400,75,sales[1].units);
ctx.fillStyle = "#ff0000";
ctx.fillRect(-510,-400,75,sales[2].units);

ctx.stroke();

// Good practice
context.restore();
