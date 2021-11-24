
const canvas = document.getElementById("myCanvas");
const cxt = canvas.getContext("2d");
// Array created to store some random height.
const heights = [30,50,30,60,70,25,35];
// Array created to store some random y-axis values.
const index = [35,55,75];
// function to create a random height every time.
const random = ()=>{
    return heights[Math.floor(Math.random()*(heights.length-1))];
}
// function to create a random y-axis value every time.
const random1 = ()=>{
     return index[Math.floor(Math.random()*(index.length-1))];
}

cxt.fillStyle = "red";
let c=5;

// function to create a rectangle with different values.
function fillRect(){
    for(var i=0; i<145; i++){
        var ran = random();
        var ran1 = random1();
        cxt.fillRect(c,ran1,1,ran)
        c+=2;
        console.log("object")
    }
}
fillRect();

let audio=document.createElement("audio");
let play=document.getElementById("play");
let pause=document.getElementById("pause");
let unmute=document.getElementById("unmute");
let mute=document.getElementById("mute");
let next=document.getElementById("next");

let songs=["music/Avicii.mp3","music/Closer.mp3","music/Happier.mp3","music/I'm an Albatraoz.mp3","music/Let Me Love You.mp3","music/Love Me Like You Do.mp3","music/Right Now.mp3","music/Rockstar.mp3","music/Smack That.mp3","music/Swalla.mp3","music/The Spectre.mp3"];
var j=0;

const name=document.getElementById("songName");

function song(j){
    let songName=songs[j].split("/");
    name.innerHTML=songName[songName.length-1];
    
    audio.src=songs[j];
    audio.load();
}
song(j);

function next1(){
    // maintaining a counter to loop through the songs.
    j++;
    if(j==songs.length){
        j=0;
    }
    song(j);
    // calling the play function so that next song automatically starts playing. 
    play1();
}
// Audio play and pause 

function play1(){
    play.style.display="none"
    pause.style.display="block"

    // play the audio
    audio.play()
}

function pause1(){
    pause.style.display="none"
    play.style.display="block"

    // pause the audio
    audio.pause()

}

function mute1(){
    mute.style.display="none"
    unmute.style.display="block"

    // muting the audio.
    audio.muted=true;
}

function unmute1(){
    unmute.style.display="none"
    mute.style.display="block"

    //unmuting the audio.
    audio.muted=false;
}




