var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');
c.fillStyle="rgba(255,0,0,0.26)";
colour_array=["orange","grey","blue"];
var tot_pts=Math.sqrt(Math.sqrt(window.innerHeight*window.innerWidth)*Math.sqrt(window.innerHeight*window.innerHeight+window.innerWidth*window.innerWidth))/4;
function Circle(x,y,r,dx,dy,color,minr)
{
    this.x=x;
    this.y=y;
    this.r=minr;
    this.dx=dx;
    this.dy=dy;
    this.color=color;
    this.minr=minr;

    this.draw  = function ()
    {
        c.beginPath();
        c.fillStyle=this.color;
        c.arc(this.x, this.y, this.r, Math.PI * 2, false);
        c.fill();
        c.stroke();
    }

    this.update = function ()
    {
        this.x+=this.dx;
        this.y+=this.dy;
        if(this.x>=window.innerWidth-r||this.x<=r)
            this.dx=-this.dx;
        if(this.y>=window.innerHeight-r||this.y<=r)
            this.dy=-this.dy;
        this.draw();
    }
}
var circlearray =[];
for (var i=0;i<tot_pts;i++)
{
    var r=10;
    var x=Math.random()*(window.innerWidth-r);
    var y=Math.random()*(window.innerHeight-r);
    var dx=(Math.random()-0.5)*4;
    var dy=(Math.random()-0.5)*4;
    var color=colour_array[i%colour_array.length];
    var minr=Math.random()*15+2;
    circlearray.push(new Circle(x,y,r,dx,dy,color,minr));
}
var mouse={
    x:undefined,
    y:undefined
}
window.addEventListener("mousemove",function(event){
   mouse.x=event.x;
   mouse.y=event.y;
})
window.addEventListener("resize", function(){resize();})
window.addEventListener("mouseout",function () {
    mouse.x=window.innerWidth*2+visinity;
    mouse.y=window.innerHeight*2+visinity;   })
function resize() {
    for (var i = circlearray.length; i >=0 ; i--)
        circlearray.pop();
    tot_pts=Math.sqrt(Math.sqrt(window.innerHeight*window.innerWidth)*Math.sqrt(window.innerHeight*window.innerHeight+window.innerWidth*window.innerWidth))/4;
    for (var i = 0; i < tot_pts; i++) {
        var r = 10;
        var x = Math.random() * (window.innerWidth - r);
        var y = Math.random() * (window.innerHeight - r);
        var dx = (Math.random() - 0.5) * 4;
        var dy = (Math.random() - 0.5) * 4;
        var color = colour_array[i % colour_array.length];
        var minr = Math.random() * 15 + 2;
        circlearray.push(new Circle(x, y, r, dx, dy, color, minr));
    }
}
var visinity =100;
var maxradius =30;
function animate()
{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    tot_pts=Math.sqrt(Math.sqrt(window.innerHeight*window.innerWidth)*Math.sqrt(window.innerHeight*window.innerHeight+window.innerWidth*window.innerWidth))/12;


    for(var i=0;i<circlearray.length;i++)
    {

        if(Math.sqrt(Math.pow(circlearray[i].x-mouse.x,2)+Math.pow(circlearray[i].y-mouse.y,2))<visinity && circlearray[i].r<maxradius)
            circlearray[i].r++;
        else if(Math.sqrt(Math.pow(circlearray[i].x-mouse.x,2)+Math.pow(circlearray[i].y-mouse.y,2))>visinity&& circlearray[i].r>circlearray[i].minr)
            circlearray[i].r--;
        circlearray[i].update();
        /*mouse.x=window.innerWidth*2+visinity;
        mouse.y=window.innerHeight*2+visinity;*/


    }


}
animate();