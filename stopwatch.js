let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
 let timerRef = document.querySelector('.time');
let int = null;
document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('reset').addEventListener('click', ()=>{
    alert("are you sure");
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
function search() {
    let a;
    a = new Date();
        let america_time = a.toLocaleString("en-US", { timeZone: "america/Los_Angeles" });
        let india_time = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
        let china_time = a.toLocaleString("en-US", { timeZone: "asia/Shanghai" });
        let Bangladesh_time = a.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
        let dubai_time = a.toLocaleString("en-US", { timeZone: "Asia/Dubai" });
        let afganisthan_time = a.toLocaleString("en-US", { timeZone: "Asia/Kabul" });
        let russia_time = a.toLocaleString("en-US", { timeZone: "Europe/Moscow" });
        let england_time = a.toLocaleString("en-US", { timeZone: "Europe/London" });
        let qatar_time = a.toLocaleString("en-US", { timeZone: "Asia/Qatar" });
        let south_africa_time = a.toLocaleString("en-US", { timeZone: "Africa/Johannesburg" });
        let nepal_time = a.toLocaleString("en-US", { timeZone: "asia/Kathmandu" });
        let spain_time = a.toLocaleString("en-US", { timeZone: "Europe/Madrid" });
        // alert("hi");
        search_keyword = document.getElementById("input").value;
        if (search_keyword == "america") {
            alert(america_time);
        }
        else if (search_keyword == "india") {
            
            alert(india_time);
        }
         else if (search_keyword == "china") {
            
             alert(china_time);
         }
         else if (search_keyword == "bangladesh") {
             alert(Bangladesh_time);
             }
         else if (search_keyword == "dubai") {
             alert(dubai_time);
             }
         else if (search_keyword == "afganisthan") {
             alert(afganisthan_time);
             }
         else if (search_keyword == "russia") {
             alert(russia_time);
             }
         else if (search_keyword == "england") {
             alert(england_time);
             }
         else if (search_keyword == "qatar") {
             alert(qatar_time);
             }
         else if (search_keyword == "southafrica") {
             alert(south_africa_time);
             }
         else if (search_keyword == "nepal") {
             alert(nepal_time);
             }
         else if (search_keyword == "spain") {
             alert(spain_time);
             }
        else {
            alert("enter a valid time jone");
        }
    }