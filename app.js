// Variable
const btn = document.querySelector('.startBtn')


// Functions
const showTime = () => {
    let localTime = new Date();
    let h = localTime.getHours();
    let m = localTime.getMinutes();
    let s = localTime.getSeconds();

    s = checkTime(s);
    m = checkTime(m);
    h = checkTime(h);
    
   function checkTime(i){ if (i < 10){
        i = '0' + i;
    };
    return i;
   }
    

    let pcTime = ("Current Time" + " " + h + ":" + m + ":" + s)
    const currentTime = document.querySelector('.settings__show-time')

    currentTime.innerHTML = pcTime

}


const btnTimeValue = () => {
    
    // variable with btns and anchor document element
    const hAdd = document.querySelector('.settings_add-h');
    const hMinus = document.querySelector('.settings__del-h');
    const mAdd = document.querySelector('.settings__add-m');
    const mMinus = document.querySelector('.settings__del-m');
    let hourOne = document.querySelector('.settings__hour-one');
    let minuteOne = document.querySelector('.settings__minute-one');
    
    // Times variable
     let hour = 0;
     let minute = 0; 
    
     // function increasing time value
    let valueHAdd = () => {
        hour += 1;
        
        if(hour > 23 ){
            hour = 0
        } 
        
       hourOne.innerHTML = hour;

        if(hour < 10){
            hourOne.innerHTML = "0" + hour
        }
    }
    let minuteValueAdd = () => {
        minute += 1;
        if(minute > 59) {
            minute = 0;
        }
        minuteOne.innerHTML = minute;
        if(minute < 10){
            minuteOne.innerHTML = "0" + minute
        }
    }

    // run increasing value time function
    const clickMinuteAdd = mAdd.addEventListener('click',minuteValueAdd)
    const clickAdd = hAdd.addEventListener('click', valueHAdd);
    
    // function decreasing value for Minute 
    let valueHMinus = () => {
        hour -= 1;
        if(hour < 1){
            hour = 23;
        }
        hourOne.innerHTML = hour;
        if(hour < 10){
            hourOne.innerHTML = "0" + hour
        }
    }

    let decreasingValueMinute = () => {
        minute -= 1;
        if(minute < 0){
            minute = 59;
        }
        minuteOne.innerHTML = minute
        if(minute < 10){
            minuteOne.innerHTML = "0" + minute;
        }
    }
    
    //run decreasing function for Minute Value
    const clickMinusMinute = mMinus.addEventListener('click', decreasingValueMinute)
    const clickMinus = hMinus.addEventListener('click', valueHMinus)


}

const btnClicked = () =>{
    btn.classList.toggle('.clicked');
    if(btn.classList.contains('.clicked') == true){
        btn.innerHTML = 'Alarm is Set';
    }else{
        btn.innerHTML = 'Set Alarm'
    }
}

const playAudio = () =>{
let timeVar;
let takeHour = document.querySelector('.settings__hour-one').textContent;
let takeMinute = document.querySelector('.settings__minute-one').textContent
timeVar = takeHour + ":" + takeMinute;
let currentTime = new Date();
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();
const btn = document.querySelector('.startBtn')
const container = document.querySelector('.cointainer');
const clock = document.querySelector('.container__clock')


if(minute < 10){
    minute = "0" + minute;

}
if(hour < 10){
    hour = "0" + hour;

}
let actuallyTime = hour + ":" + minute;

let audio = new Audio('sources/cock.mp3');

    const played = () => {
        if(btn.classList.contains('.clicked') == true && timeVar == actuallyTime){
        audio.play();
        audio.loop = true;
        clock.classList.add('ring')
        btn.innerHTML = 'STOP';
        container.style.backgroundColor = 'rgb(92, 77, 145)';
        clearInterval(interval)
        
        }
    }
    const stop = () => {
        if(btn.classList.contains('.clicked') == false){
            audio.pause();
            clock.classList.remove('ring')
            container.style.backgroundColor = 'rgb(50, 38, 92)'
            clearInterval(interval)
            interval = setInterval(playAudio, 1000)
        }
        

    }
    if(btn.classList.contains('.clicked')== true && timeVar == actuallyTime){
        played()
        clearInterval(interval)
        btn.addEventListener('click', stop)
        
    }
    

};
let interval = setInterval(playAudio, 1000);


// run Functions
btn.addEventListener('click', btnClicked)
setInterval(showTime, 1000);
btnTimeValue();


