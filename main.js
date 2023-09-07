song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() 
{
    image(video, 0, 0, 600, 500,);
    fill('#E97451');
    stroke('#E97451');

    song1.isPlaying();
    console.log(song_1);

    song2.isPlaying();
    console.log(song_2);

    if(scoreleftWrist > 0.2)
    {
       circle(leftWrist_x,leftWrist_y,20)
       song2.stop();
       if(song1 == false)
       {
        song1.play();
       }
}
if(scorerightWrist > 0.2)
{
   circle(rightWrist_x,rightWrist_y,20)
   song1.stop();
   if(song2 == false)
   {
    song2.play();
   }
}
}
function modelLoaded() 
{
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}