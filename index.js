
const canvas = document.getElementById("myCanvas");
const cxt = canvas.getContext("2d");
// Array created to store some random height.
const heights = [30,50,30,60,25,25,35];
// Array created to store some random y-axis values.
const index = [45,55,65];
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