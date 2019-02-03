// Start Functions
function draw() {
    var canvas = document.querySelector("#mycanvas");
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    if (centerX > centerY) {
        var radius = centerY;
    } else {
        var radius = centerX;
    }

    if (intervalR <= radius) {
    context.beginPath();
    context.arc(centerX, centerY, intervalR, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
    intervalR++;
    } else {
    clearInterval(intervalID);
    }
}

function clearCanvas() {
    var canvas = document.querySelector("#mycanvas");
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function calculate() {
    var r = document.querySelector("#inputRadius").value;

    if (r === "" || isNaN(r)) {
        alert("not");
        return;
    } else if (!isNaN(r)) {
        var soutput = document.querySelector("#output");
        var result = 4 * Math.PI * Math.pow(r, 2);
        soutput.innerHTML =  result;
    }

    
    var canvas = document.querySelector("#mycanvas");
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = r;
    if (r > canvas.width / 2 || r > canvas.height / 2) { 
        alert("Circle is out of borders!");
        return; 
    } else {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
   
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
    }
    
}

// End Functions
var n = document.querySelector("#calculateBtn");
var nClear = document.querySelector("#clearBtn");
nClear.addEventListener("click", clearCanvas);
n.addEventListener("click", calculate);