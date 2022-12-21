let a, time,date;
setInterval(() => {

    function zero(z) {
        if (z < 10) { z = '0' + z }  
        return z;
    }
    a = new Date();
    // console.log(a);
    time = zero(a.getHours()) + ':' + zero(a.getMinutes()) + ':' + zero(a.getSeconds());
    // console.log(time);
    date = a.toLocaleDateString();
    // console.log(date);
    // console.log(time + 'on' + date);
    document.getElementById('new_time').innerHTML = time + ' on ' + date;
}, 1000);

// https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html

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