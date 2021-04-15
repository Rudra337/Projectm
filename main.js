img1 ="";
status = "";
objects = [];
song ="";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}



function preload()
{
    
}

function draw()
{
    image(video, 0, 0, 640, 420);

    if(status != "")
    {
        for (i =0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Baby Found";

            if(document.getElementById("status").innerHTML = "Status : Baby Found")
            {

            } else
            {
              document.getElementById("status").innerHTML = "Status: Baby Not Found";
              song = loadSound("music.mp3");
              song.play();
              song.setVolume(1);
              song.rate(1);

            }

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y+20);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
        }
    }
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }

    console.log(results);
    objects = results;
}