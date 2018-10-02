var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');
c.fillStyle="rgba(255,0,0,0.26)";
//c.fillRect(100,100,100,100);
//c.beginPath();
//c.moveTo(50,300);
//c.lineTo(100,250);
//c.lineTo(100,360);

//c.stroke();
for(var i=0;i< window.innerHeight * window.innerWidth/100;i++)
{
    var r =Math.random()*255;
    var g =Math.random()*255;
    var b =Math.random()*255;

    c.strokeStyle="rgb("+r+","+g+","+b+")";
    c.beginPath();
    var x=Math.random()*window.innerWidth;
    var y=Math.random()*window.innerHeight;
    c.arc(x,y,20,Math.PI*2,false);
    c.stroke();
}
