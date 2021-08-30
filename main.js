noseX=0
noseY=0
function preload(){
    alastor=loadImage("https://i.postimg.cc/HnV5xfg2/Me-eye.jpg")
}
function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    //Video code//
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotposes)
}
function draw() {
    image(video,0,0,400)
    fill("blue")
    stroke ("green")
    //circle(noseX,noseY,40)
    poseNet.on("pose",gotposes)
    image(alastor,noseX,noseY,30,30)
    filter(GREY)
}
function take_snapshot() {
    save("Vihaansagenius.png")
}
function modelLoaded(){
    console.log("Pose net has given his profile pose(A horrible one at that)")
}