// console.log("tostring " + mydate.toString());
// console.log("todateString " +mydate.toDateString());
// console.log("toLocaleDateString " +mydate.toLocaleDateString());
// console.log("tolocalestring " +mydate.toLocaleString());
// console.log(mydate.toJSON());
// console.log(typeof mydate);

let hr = document.querySelector("#hr");
let ms = document.querySelector("#ms");
let sec = document.querySelector("#se");
let meridiem = document.querySelector("#meridiem");
let d = document.querySelector("#show");
let datetime = document.querySelector("#datetime");
let ringtone = document.querySelector("#alram-ringtone");

// console.log(dateValue);



function calltime() {
    let mydate = new Date(); // date and time object

    // convert to time
    let hrtime = mydate.getHours();
    let mstime = mydate.getMinutes();
    let sectime = mydate.getSeconds();
    let day = mydate.toLocaleDateString();

    if (hrtime >= 12) {
        meridiem.innerHTML = "PM";
    } else {
        meridiem.innerHTML = "AM";
    }

    // console.log(hrtime + " " + mstime + " " + sectime);
    hr.innerHTML = hrtime;
    ms.innerHTML = mstime;
    sec.innerHTML = sectime;
    // console.log(day);
    d.innerHTML = day

}

setInterval(() => {
    calltime()
}, 1000)


// let date = new Date();
let alarm;

// Set Alrem Function
function btn() {
// this is System Date
    alarm =  setInterval(function () {
        let systemdate = new Date();
        let systemHr = systemdate.getHours();
        let systemMin = systemdate.getMinutes();
        let systemsec = systemdate.getSeconds()
        let systemday = systemdate.getDay();
        let systemmonth = systemdate.getMonth();
        let systemyear = systemdate.getFullYear();
     
// that is user input Date
        let userdate = new Date(datetime.value)
        let userh = userdate.getHours();
        let userm = userdate.getMinutes();
        let userday = userdate.getDay();
        let usermonth = userdate.getMonth();
        let useryear = userdate.getFullYear();
        
        // condition check user date and systemdate
        if(userh == systemHr &&
            userm == systemMin &&
            userday == systemday &&
            usermonth == systemmonth &&
            useryear == systemyear
        ){
            ringtone.play(); // play Ringtone
            // pause ringtone after 60sec
            setTimeout(()=>{
                ringtone.pause()
            },60000)
        }
    },1000);
}

// stop Alram function
function stop(){
    clearInterval(alarm)
    datetime.value = "";
    ringtone.pause()
}

