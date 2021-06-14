function preload(){

    

}

function setup(){

    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);

    posenet.on('pose', gotPoses);

}

function draw(){
    
    image(video,0,0, 400, 400);

}

function takeSnapshot(){

    save('clownose of random person but most likely me.png');

}

function modelLoaded(){

    console.log("the model has been loaded and initialised and stufqhegwfigFEYGByfwevfkewg");

}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

    }

}