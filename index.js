
const canvas = document.getElementById("myCanvas");
const cxt = canvas.getContext("2d");
const heights = [30,50,20,60,15,25,35];
const index = [45,55,65];
const random = ()=>{
    return heights[Math.floor(Math.random()*(heights.length-1))];
}
const random1 = ()=>{
     return index[Math.floor(Math.random()*(index.length-1))];

}

cxt.fillStyle = "red";
let c=5;

function fillRect(){
    for(var i=0; i<145; i++){
        var ran = random();
        var ran1 = random1();
        cxt.fillRect(c,index,1,ran)
        c+=2;
        console.log("object")
    }
}
fillRect();