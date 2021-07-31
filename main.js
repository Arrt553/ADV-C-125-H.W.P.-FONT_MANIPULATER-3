function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(460,300)
    canvas = createCanvas(400,400);
    canvas.position(1060,350);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);
}
function draw(){
    background("#0011ff");
    textSize(10);
    fill("#FFE787")
    text("ADARSH",50,400)
}

function modelLoaded(){
    console.log("Model is Initialized!");
}

function getPoses(results){

    if(results.length > 0){
        console.log(results);
        leftWrist_X = results[0].pose.leftWrist.x;
        rightWrist_X = results[0].pose.rightWrist.x;
        difference = floor(leftWrist_X - rightWrist_X)
    }
}
