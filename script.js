let hours = document.getElementById("hTime");
let minutes = document.getElementById("mTime");
let seconds = document.getElementById("sTime");
let amPm = document.getElementById("ampm")

let now = new Date();
let hrs = now.getHours();
let mins = now.getMinutes();
let secs = now.getSeconds();


let rSecs = secs;
let rMins = mins;
let rhours = hours;

function updateTime() {
    setInterval(function () {
        if (rSecs >= 59) {
            rSecs = 0;
            seconds.innerText = rSecs + "0";
            if (rMins > 59 && rSecs >= 59) {
                rMins = 0;
                minutes.innerText = rMins + "0";

                rhours++;
                if (rhours > 12) {
                    rhours = rhours - 12;
                    hours.innerText = rhours;
                    amPm.innerText = "PM";

                }
                else {
                    hours.innerText = rhours;
                    amPm.innerText = "AM";
                }

            }
            else {
                rMins++;
                if (rMins < 9) {
                    minutes.innerText = `0${rMins}`;
                }
                else {
                    minutes.innerText = rMins;
                }
            }
        }
        else {
            rSecs++;
            if (rSecs < 9) {
                seconds.innerText = `0${rSecs}`;
            }
            else {
                seconds.innerText = rSecs;
            }
        }
    }, 1000)
}
window.onload = () => {

    if (hrs < 12) {
        amPm.innerText = "AM"
    }
    else {
        amPm.innerText = "PM"

    }

    hrs > 12 ? hrs = hrs - 12 : hrs;


    //hrs < 9 ? hours.innerText = "0" + hrs : hrs;
    if (hrs < 9) {
        hours.innerText = "0" + hrs;
    }
    else {
        hours.innerText = hrs;
    }

    if (mins < 9) {
        minutes.innerText = "0" + mins;
    }
    else {
        minutes.innerText = mins;
    }

    if (secs < 9) {
        seconds.innerText = "0" + secs;
    }
    else {
        seconds.innerText =secs;
    }
    
    
    updateTime();
}