console.log("loaded 🐼")
const stage =document.querySelector("body");
const pandaman = document.getElementById("pandaman");
const forest = new Audio("sounds/forest-sounds-259933.mp3")
pandaman.onclick = function() {
    this.classList.toggle("move");
    forest.play();
}

stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY);
    //pandaman.style.tansform="translateX("+ event.clientX +"px) translateY("+ event.clientY+"px)";
    //"" '' ``
    pandaman.style.transform = `translateX(${event.clientX-100}px) translateY(${event.clientY-92}px)`;
})

// Keyboard input
document.onkeydown = checkKeys;

function checkKeys(event) {
    
    var style = window.getComputedStyle(pandaman);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;    
    var coords;

    //left arrow
    if(event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        pandaman.style.transform = coords;
    }
    //right arrow
    if(event.keyCode == "39") {
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        pandaman.style.transform = coords;
    }
    //up arrow
    if(event.keyCode == "38") {
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        pandaman.style.transform = coords;
    }
    //down arrow
    if(event.keyCode == "40") {
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        pandaman.style.transform = coords;
    }



}


function addMyObject() {
    /* Custom Object */
    let myObject = document.createElement("img");
    myObject.src = "img/bamboo.svg";
    myObject.style.width = "100px";
    stage.append(myObject);

    let w = window.innerWidth - 100;
    let randoX = Math.floor((Math.random() * w) + 1);
    let h = window.innerHeight - 58;
    let randoY = Math.floor((Math.random() * h) + 1);

    myObject.style.transform = `translateX(${randoX}px) translateY(${randoY}px)`;

    setTimeout(() => { 
        // myObject.remove();
        addMyObject(); }, 40);

}
addMyObject();


