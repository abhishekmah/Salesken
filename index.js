
const canvas = document.getElementById("myCanvas");
const cxt = canvas.getContext("2d");
// cxt.imageSmoothingEnabled = true;
window.devicePixelRatio=-2; 
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

let heightLength=[];
let yLength=[]

function randomTrack(){
    cxt.clearRect(0,0,1200,300);
    let x1=5
    for(let i=0;i<145;i++){
        cxt.fillStyle="white"
        let ran = random();
        heightLength.push(ran)
        let ran1 = random1();
        yLength.push(ran1)
        cxt.fillRect(x1,ran1,1,ran)
        
        x1+=2;
    }
    }
    randomTrack()
    
    // console.log(heightLength,yLength);

cxt.fillStyle = "red";

// function to create a rectangle with different values.
function fillRect(c){
    
        var ran = random();
        var ran1 = random1();
        canvas.style.height=ran;
        cxt.fillRect(c,ran1,1,ran)
}

canvas.addEventListener("click", getCoordinates)
function getCoordinates(e){
    const x = e.clientX-14;
    const y = e.clientY-27;

    console.log("x:" + x + " "+ "y:" + y);
    // audio.currentvalue
}

//Getting the references of HTML elements we have introduced.
let audio=document.createElement("audio");
let play=document.getElementById("play");
let pause=document.getElementById("pause");
let unmute=document.getElementById("unmute");
let mute=document.getElementById("mute");
let next=document.getElementById("next");

let songs=["music/Avicii.mp3","music/raatan.mp3","music/agar.mp3","music/Closer.mp3","music/Happier.mp3","music/I'm an Albatraoz.mp3","music/Let Me Love You.mp3","music/Love Me Like You Do.mp3","music/Right Now.mp3","music/Rockstar.mp3","music/Smack That.mp3","music/Swalla.mp3","music/The Spectre.mp3"];
var j=0;

const name=document.getElementById("songName");

function song(j){
    let songName=songs[j].split("/");
    name.innerHTML="Song Name:" + "    "+ songName[songName.length-1];
    
    audio.src=songs[j];
    audio.load();
}
song(j);

var duration=0;
function next1(){
    // maintaining a counter to loop through the songs.
    randomTrack()
    j++;
    if(j==songs.length){
        j=0;
    }
    song(j);
    // calling the play function so that next song automatically starts playing. 
    play1();
}


// Audio play and pause.

let x=5;
var timer;
let z=0;
let playback=false;
let c=5;

function play1(){
    play.style.display="none"
    pause.style.display="block"

    // play the audio.
    audio.play()
        // For moving the bars according to the song.
    timer=setInterval(()=>{
        cxt.fillRect(x,yLength[z],1,heightLength[z])
           
            x+=2;
            duration+=((audio.duration)/1200)*8300
            console.log((audio.currentTime)*1000,duration,(audio.duration)*1000)

            if(duration>=(audio.duration)*1000){
                z=0;
                x=5;
                duration=0;
                clearInterval(timer)
                playback=true;
                pause1()
            }
            z++;
        },((audio.duration)/1200)*8300)
}

function pause1(){
    pause.style.display="none"
    play.style.display="block"

    // pause the audio.
    audio.pause()

    // For stoping the movement of bars.
    clearInterval(timer);
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




