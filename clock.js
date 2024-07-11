const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");

const updateTime = () =>
{
    // Get current time and calculate degrees for clock hands

    let date = new Date();

    let secToDeg = (date.getSeconds() / 60) * 360;

    //let minToDeg = (date.getMinutes() / 60) * 360;
    let minToDeg = (((date.getMinutes() * 60) + (date.getSeconds())) / 3600) * 360;

    //let hourToDeg = (date.getHours() / 12) * 360;
    let hourToDeg = (((date.getHours() * 3600) + (date.getMinutes() * 60) + (date.getSeconds())) / 43200) * 360;

    //console.log(secToDeg);

    secHand.style.transform = `rotate(${secToDeg}deg)`;
    minHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

setInterval(updateTime, 1000);

updateTime();


const darkMode = document.querySelector(".darkMode");

darkMode.addEventListener("click", () => 
{
    // Toggle "darkMode" class
    body.classList.toggle("dark");
})
//