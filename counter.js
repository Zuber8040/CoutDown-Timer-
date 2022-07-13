

const daysEl = document.querySelector('#days')   
const hoursEL = document.querySelector('#hours') 
const minsEL   = document.querySelector('#mins')
const secondsEL = document.querySelector('#seconds')

const newYear = "1 Jan 2023";

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate= new Date();
    
    const totalSeconds = (newYearDate-currentDate)/1000;
    
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor( totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;


    // console.log(days,hours,minutes,seconds);
   
    daysEl.innerHTML = days ;
    hoursEL.innerHTML= hours;
    minsEL.innerHTML= minutes;
    secondsEL.innerHTML = seconds;




}
// initital call
countDown();

setInterval(countDown,1000);

















