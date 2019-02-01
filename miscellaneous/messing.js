//In order tio use this file I need to figure out hew to specify an external JS file in the html

//alert("Flashing Lights Ahead");

function draw() {
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
	var ctx = canvas.getContext('2d');
	//ctx.fillStyle = 'rgb(200, 0, 0)';
	//ctx.fillRect(10, 10, 50, 50); //Draws a filled rectangle
	//draws a rectangular outline: ctx.strokeRect(x, y, w, h);
	//clears a recangular area: ctx.clearRect(x, y, w, h);

	ctx.beginPath();
	ctx.moveTo(75, 50);
	ctx.lineTo(100, 75);
	ctx.lineTo(100, 25);
	ctx.fill();
    }
}


//ctx.fillStyle="ffffff";
//ctx.moveTo(0, 0);
//ctx.lineTo(200, 100);
//ctx.stroke;
//ctx.ellipse(123, 324, 34, 345);
