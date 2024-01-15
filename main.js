console.log("Main.js loaded")

var clicks = 0;

function add(){
    clicks++;
    document.getElementById("clickCount").innerHTML = "Clicks: " + clicks
}