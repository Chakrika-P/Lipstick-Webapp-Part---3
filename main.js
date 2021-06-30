var lips_x=0;
var lips_y=0;

function preload(){
lips=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
image(video,0,0,350,350);
image(lips,lips_x,lips_y,51,25);
}

function take_snap(){
    save("my_lipstick.png");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("lips x is" + results[0].pose.nose.x);
        console.log("lips y is" + results[0].pose.nose.y);
        lips_x=results[0].pose.nose.x-25;
        lips_y=results[0].pose.nose.y+24;
    }
}