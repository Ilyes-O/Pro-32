const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var datetime;
var hour

var bg 

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg )
        background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here
    fill("white")
    text("Hour :"+ hour, 500,25)

    
}

async function getBackgroundImg(){

    var bg;
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime
    console.log(datetime.slice(11,13))
    hour = datetime.slice(11,13);
    if(hour >=04 &&  hour<=06){
        bg = 'sunrise1.png';
    }else if(hour>=06&& hour<=08){
        bg = 'sunrise2.png';
    }else if(hour>=23 && hour ===0){
        bg = 'sunrise10.png'
    }else if (hour === 0&&hour <=03){
        bg = 'sunset11.png'
    }else {
        bg = 'sunset12.png'
    }
    backgroundImg= loadImage(bg);

}
