
const Time =document.getElementById('time');
const startBtn= document.getElementById('start');
const stopBtn= document.getElementById('stop');
const resetBtn= document.getElementById('reset');
startBtn.disabled =false;
stopBtn.disabled =false;
resetBtn.disabled =false;
let interval;
function stopWatch()
{   
 let time =0;
interval =setInterval(() => {

const mins = Math.floor(time / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

// Display the countdown
Time.textContent = `${mins}m ${secs}s`;

time += 1000;
startBtn.disabled=true;
},1000);
}

function btn(type)
{
    if(type==='start')
    {
       
        stopWatch();
        stopBtn.disabled =false;
        resetBtn.disabled =false;
    }
    else if(type ==='reset')
    {
        clearInterval(interval);
        Time.textContent = "0:00";
        startBtn.disabled =false;
        stopBtn.disabled =false;
        resetBtn.disabled =false;
    }
    else if(type ==='stop')
        {
            clearInterval(interval);
            startBtn.disabled =false;
            stopBtn.disabled =true;
            resetBtn.disabled =false;
        }
        
}

