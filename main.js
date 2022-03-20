nosex =0;
nosey =0;

function preload(){

    mustache = loadImage("https://i.postimg.cc/MpRKzVSQ/mustache.png");

}

function setup(){

    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);

}

function draw(){

    image(video, 0, 0, 500, 500);
    image(mustache, nosex-50, nosey-25, 100,100);

}

function take_snapshot(){

    save('ugotastache.png');

}

function modelLoaded(){

    console.log("posenet is initialised");

}

function gotposes(results){

    if(results.length > 0){

        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x + " nose y = " + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

    }

}