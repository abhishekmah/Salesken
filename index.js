
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
let heightArray=[];
let indexArray=[];

// For the first time printing grey boxes.
function randomTrack(){
    cxt.clearRect(0,0,1400,300);
    
    let x1=5
    for(let i=0;i<145;i++){
        cxt.fillStyle="grey"
        let ran = random();
        heightArray.push(ran)
        let ran1 = random1();
        indexArray.push(ran1)
        cxt.fillRect(x1,ran1,1,ran)
        
        x1+=2;
    }
    }
    randomTrack()
    
    // console.log(heightArray,indexArray);

cxt.fillStyle = "red";

// function to create a rectangle with different values.////////////////////////////////////////////////////////////////
function fillRect(c){
        var ran = random();
        var ran1 = random1();
        canvas.style.height=ran;
        cxt.fillRect(c,ran1,1,ran)
}

canvas.addEventListener("click", getCoordinates)

var statusClick=false;
var repeat=false;

// Getting the co-ordinates for calculating audio length. and putting funtionality for sliding to the selected audio timing.////////
function getCoordinates(e){
    statusClick=true;
    clearInterval(timer);
    
    const x = e.clientX-14;
    const y = e.clientY-27;
    clearInterval(timer1);
    audio.currentTime=(((x/10))/149)*audio.duration;
    play.style.display="none"
    pause.style.display="block"
    audio.play()

    // console.log("x:" + x + " "+ "y:" + y);
    
    trackOnclick(x);
}

var timer1;
var duration=0;
function trackOnclick(x){
    var boxes = Math.ceil(x/9.6)-3;
    // console.log(boxes);
    cxt.clearRect(0,0,1400,300);
    
    let x1=5;
    let x2=5;
    for(var i=0;i<145;i++){
        cxt.fillStyle="grey"
        cxt.fillRect(x1,indexArray[i],1,heightArray[i]);
        
        x1+=2;
    }

    for(i=0; i<boxes; i++){
        cxt.fillStyle="red";
        cxt.fillRect(x2,indexArray[i],1,heightArray[i]);
        
        x2+=2;
    }
    // play1();

    var z1=boxes;
    timer1=setInterval(()=>{
        cxt.fillRect(x2,indexArray[z1],1,heightArray[z1])
           
            x2+=2;
            duration+=((audio.duration)/1200)*8300
            // console.log((audio.currentTime)*1000,duration,(audio.duration)*1000)
            // console.log(z1)
            if(z1==145){
                z1=0;
                x2=5;
                x3=5;
                repeat=true;
                duration=audio.duration;
                audio.currentTime=0;
                clearInterval(timer)
                playback=true;
                pause1()
            }
            z1++;
        },((audio.duration)/1200)*8300)
}

//Getting the references of HTML elements we have introduced.
let audio=document.createElement("audio");
let play=document.getElementById("play");
let pause=document.getElementById("pause");
let unmute=document.getElementById("unmute");
let mute=document.getElementById("mute");
let next=document.getElementById("next");

let songs=["music/I'm an Albatraoz.mp3"];
var j=0;

const name=document.getElementById("songName");

// Loading songs./////////////////////////////////////////////////////////////////////////////////////////////////////
function song(j){
    let songName=songs[j].split("/");
    name.innerHTML="Song Name:" + "    "+ songName[songName.length-1];
    
    audio.src=songs[j];
    audio.load();
}
song(j);

// function next1(){
//     // maintaining a counter to loop through the songs.
//     randomTrack()
//     j++;
//     if(j==songs.length){
//         j=0;
//     }
//     song(j);
    
//     // calling the play function so that next song automatically starts playing. 
//     play1();
//     trackOnclick(24);
// }

// Audio play ,pause, mute, unMute./////////////////////////////////////////////////////////////////////////////////////////////////////

let x3=5;
let z=0;
var timer;
let playback=false;
let c=5;

function timer2(){
    if(repeat===true){
        z=0;
    }
    cxt.fillStyle="red";
    timer=setInterval(()=>{
        // console.log(z)
        cxt.fillRect(x3,indexArray[z],1,heightArray[z])
           
            x3+=2;
            duration+=((audio.duration)/1200)*8300
            // console.log((audio.currentTime)*1000,duration,(audio.duration)*1000)
    
            if(duration>=(audio.duration)*1000){
                z=0;
                x3=5;
                duration=0;
                clearInterval(timer)
                playback=true;
                pause1()
            }
            z++;
        },((audio.duration)/1200)*8300)
}


function play1(){
    play.style.display="none"
    pause.style.display="block"

    // console.log(x3,z,(duration)*1000);
    // play the audio.
    audio.play()

    if(statusClick===false){
        timer2();
    }
    if(repeat===true){
        cxt.clearRect(0,0,1400,300);
        // console.log(indexArray)
        for(var i=0;i<145;i++){
            cxt.fillStyle="grey"
            cxt.fillRect(x3,indexArray[i],1,heightArray[i]);
            
            x3+=2;
        }

        x3=5;

        timer2();
        statusClick=false;
    }
    // For moving the bars according to the song.
    
}

function pause1(){
    pause.style.display="none"
    play.style.display="block"

    // pause the audio.
    audio.pause()

    // For stoping the movement of bars.

    clearInterval(timer);
    clearInterval(timer1);
    
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
