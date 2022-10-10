//JS Code
var song1 = "";
var song2 = "";
var leftWrist_x = 0;
var leftWrist_y = 0;
var rightWrist_x = 0;
var rightWrist_y = 0;

function preload() {
    song1 = loadSound("LWS.mp3");
    song2 = loadSound("RWS.mp3");
}

function setup() {
    canvas = createCanvas(550, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 550, 500);
}

function modelLoaded() {
    console.log("PoseNet Is Loaded.");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("left wrist x = " + leftWrist_x + ", left wrist_y = " + leftWrist_y + ", right wrist x = " + rightWrist_x + " and right wrist_y = " + rightWrist_y);
    }
}