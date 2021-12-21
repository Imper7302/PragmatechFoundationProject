let second=document.querySelector('.clock_second');
let minute=document.querySelector('.clock_minute');
let hour=document.querySelector('.clock_hour');
let indi=new Date()
let second_rotate=102+indi.getSeconds()*6
let minute_rotate=28+indi.getMinutes()*1/10
let hour_rotate=-30+indi.getHours()*1/120

function clock(){
    second.style.transform=`rotate(${second_rotate}deg)`
    second_rotate+=6
    minute.style.transform=`rotate(${minute_rotate}deg)`
    minute_rotate+=1/10
    hour.style.transform=`rotate(${hour_rotate}deg)`
    hour_rotate+=1/120
}
setInterval(clock, 1000)
