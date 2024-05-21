var canvas = document.getElementById('mojeCanvas');
var ctx = canvas.getContext('2d');

var promienPilki = 15;
var x = canvas.width / 2;
var y = canvas.height / 2;
var dx = 2;
var dy = 2;

function rysujPilke() {
    ctx.beginPath();
    ctx.arc(x, y, promienPilki, 0, Math.PI * 2);
    ctx.fillStyle = "#FF4500";
    ctx.fill();
    ctx.closePath();
}

function rysuj() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rysujPilke();

    if (x + dx > canvas.width - promienPilki || x + dx < promienPilki) {
        dx = -dx;
    }
    if (y + dy > canvas.height - promienPilki || y + dy < promienPilki) {
        dy = -dy;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(rysuj);
}

rysuj();
