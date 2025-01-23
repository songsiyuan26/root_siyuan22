console.log("Loaded");


const mycircles =document.querySelectorAll(".circle");
mycircles.forEach(function(item, index)  {
    item.addEventListener("click",function() {
           // console.log("circle clicked: " + (parseInt(index) + 1));

           item.classList.toggle("move-me");
 
        if(item.classList.contains("square")) {
            //do something
        } else {
            //do something else
        } 
    })
})