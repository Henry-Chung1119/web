// window.onload = function(){
//     copyimg();

// };

// var a1 = document.querySelector("#a1");
// var a2 = document.querySelector("#a2");

// function copyimg(){
//     //a1.setAttribute('draggable',true);
//     a1.addEventListener("click",function(){
//         var newimg = document.createElement("IMG");
//         newimg.setAttribute("src","1.jpg");
//         //a1.appendChild(newimg);
//         //console.log("1");
//         var currentimg = document.querySelector("#a1");
//         document.body.insertBefore(newimg, currentimg); 
//     });

// }

// function dragimg(){
//     a2.setAttribute('draggable',true);
    
// }
window.onload = function(){
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    tileWidth = 100;
    tileHeight = 50;

    context.trnslate(width/2,50);
    drawTile(0, 0, "red");

    function dawTile(x, y, color){
        context.save();
        context.translate(x, y);
        msContentScript.beginPath();
        context.moveTo(0, 0);
        context.lineTo(tileWidth/2, tileHeight/2);
        context.lineTo(0, tileHeight);
        context.lineTo(-tileWidth/2, tileHeight/2);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }
}