const minutesLabel = document.getElementById('minutes');
const  secondLabel = document.getElementById('seconds');
const milliLabel = document.getElementById('mili');

const start = document.getElementById('startbtn');
const stop = document.getElementById('stopbtn');
const pause = document.getElementById('pausebtn');
const reset = document.getElementById('resetbtn');

const lapList = document.getElementById('laplist');
var div = document.getElementById("laps1");
//stopwatch variables
let minutes = 0;
let seconds = 0;
let mili = 0;
let interval = 0;

start.addEventListener('click',startTimer);
stop.addEventListener('click',stopTimer);
pause.addEventListener('click',pauseTimer);
reset.addEventListener('click',resetTimer);

function startTimer(){
interval= setInterval(updateTimer,10);
start.disabled = true;

}

function stopTimer(){
    clearInterval(interval);
    addToLaplist();
    resetTimerData();
    start.disabled=false;
    toggleDiv();
}

function toggleDiv() { 
        div.style.display = "block";  // Makes the div visible  
}
function pauseTimer(){
clearInterval(interval);
start.disabled=true;
}
function resetTimer() { 
clearInterval(interval);
resetTimerData();
start.disabled=false;
clear();
}

function updateTimer(){
    mili++;
    if(mili === 100){
        mili = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }
    displaytimer();
}

function displaytimer(){
    milliLabel.textContent = mili;
    secondLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}
function resetTimerData(){
    minutes=0;
    seconds=0;
    mili =0;
    displaytimer();
}
function addToLaplist(){
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(mili)}}`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
lapList.appendChild(listItem);
}
document.getElementById("clearlist").addEventListener("click",clear); 
function clear() {
    const lapList = document.getElementById("laplist");
    lapList.innerHTML = ''; // Clears all lap list items
};

