var flowerDrawing = document.getElementById("flowerSurface");
var ctx = flowerDrawing.getContext("2d");
var flower=[];
var size = 500;
var center = size/2;


function draw(){
	
	var petalNo = document.getElementById("petals").value;
    var pointNo = document.getElementById("points").value;
	flowerPoints(petalNo,pointNo,center);
	drawFlower(flower);
}

function flowerPoints(n,m,r){
	flower =[];
	for (var i=0; i<m; i++){
	   var angle = i*2*(Math.PI)/m;
	   var r2 = r*Math.abs(Math.sin(angle*n/2));
       var x = r2*Math.sin(angle);
       var y = r2*Math.cos(angle);
	   flower.push([x,y]);
	}
	console.log(flower);
}



function drawFlower(flowerPts){
	ctx.clearRect(0,0,size,size);
	ctx.save();
	ctx.translate(center,center);
	ctx.beginPath();
	
	for (var j = 0; j < flowerPts.length; j++){
	   ctx.lineTo(flowerPts[j][0],flowerPts[j][1]);	
	}
	
	ctx.lineTo(flowerPts[0][0],flowerPts[0][1]);
	ctx.stroke();
	ctx.restore();
}



