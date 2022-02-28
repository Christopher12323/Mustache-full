nosex=0
nosey=0

function preload(){

mustache=loadImage("https://i.postimg.cc/k541B7p2/download-1.png")
}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotPoses)


}
function draw(){
    image(video,0,0,300,300)
    image(mustache,nosex,nosey+15,35,35)
}
function take_snapshot(){
save('My_photo.png')

}
function modelLoaded(){
    console.log('model Loaded')
}
function gotPoses(results){
    if (results.length>0){
console.log (results)
nosex=results[0].pose.nose.x
nosey=results[0].pose.nose.y
console.log("nosex="+results[0].pose.nose.x)
console.log("nosey="+results[0].pose.nose.y)


    }

}