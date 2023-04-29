noseX=0;
noseY=0;
leftwristX=0;
rightwristx=0;
difference=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,550);

    canvas = createCanvas(550,550);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotresult);

    
}
function draw()
{
    background("#ffb366")
    fill('F900983');
    stroke('F90093');
    square(noseX, noseY, difference);
}
function modelLoaded() {
    console.log("posenet is Initialize");
}
function gotresult(results)
{
    if(results.length>0){
        console.log(results); 
        noseX = results[0].pose.nose.x;  
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristx= results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristx);

        console.log("liftwristX = " + leftwristX + " rightwristx = "+ rightwristx + " difference = " + difference);
    }
}

