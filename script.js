let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let half = document.getElementById("half");

let pm = "PM";
setInterval(() =>{
    let date = new Date();

hour.innerText = Math.floor(parseInt(date.getHours()) % 12);
minutes.innerText = date.getMinutes();
seconds.innerText = date.getSeconds();

if(hour.innerText === "00")
    {
        half.innerText = "AM"
    } 
else{
    half.innerText = "PM";
}
}, 10);