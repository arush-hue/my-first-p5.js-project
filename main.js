function preload(){}
function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(200,200);
    video.center();
    video.hide();
}
function draw()
{
    image(video,150,129,200,200);

    fill("red");
    stroke("red");
    circle(30,30,40)

    fill("green");
    stroke("green");
    rect(52,15,375,30);

    fill("red");
    stroke("red");
    circle(448,30,40);
    
    fill("green");
    stroke("green");
    rect(15,50,30,375);

    fill("red");
    stroke("red");
    circle(29,445,40);

    fill("green");
    stroke("green");
    rect(432,50,30,375);

    fill("red");
    stroke("red");
    circle(447,446,40);

    fill("green");
    stroke("green");
    rect(51,431,376,30);
}
function take_snapshot()
{
    save('digi_portrait');
}