let hourBar = document.querySelector(".clock .hourBar")
let minuteBar = document.querySelector(".clock .minuteBar")
let secondBar = document.querySelector(".clock .secondBar")
let time = document.querySelector(".time")
let fullDate = document.querySelector(".date")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


setInterval(()=>{
    let date = new Date();
    if(date.getSeconds() == 0){
        secondBar.style.transitionDuration = "0s";
    }else if(date.getSeconds() >0){
        secondBar.style.transitionDuration = "0.2s"
    }

    let degHour = date.getHours() * 30;
    if(date.getMinutes() >30 && date.getMinutes() <60){
        degHour = (date.getHours() + 1) *30;
        
    }
    secondBar.style.transform = `translate(-50%,-100%) rotate(${(date.getSeconds() * 6)}deg)`
    minuteBar.style.transform = `translate(-50%,-100%) rotate(${(date.getMinutes() * 6)}deg)`
    hourBar.style.transform = `translate(-50%,-100%) rotate(${degHour}deg)`


    let hour = (date.getHours() >=0 && date.getHours() <=9) ? `0${date.getHours()}` : date.getHours();
    let minute = (date.getMinutes() >=0 && date.getMinutes() <=9) ? `0${date.getMinutes()}` : date.getMinutes();
    time.innerHTML = `${hour}:${minute} PM`
    fullDate.innerHTML = `${days[date.getDay()]}, ${months[date.getMonth()]}, <span>${date.getDate()}</span>`;

},1000)

document.querySelector(".main button").addEventListener("click",()=>{
    if(document.body.classList.toggle("dark")){
        document.querySelector(".main button").innerHTML = "Light mode"
    }else document.querySelector(".main button").innerHTML = "Dark mode"
})

// il y'a un problem : if we have 9:45 thats mean 10hour and 45min on the clock
// I think Is Done