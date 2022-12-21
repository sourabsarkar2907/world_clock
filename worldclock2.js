let time;
let a;
a = new Date();
setInterval(() => {
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
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });
//    let india = a.toLocaleString("en-US", { timeZone: "asia/kolkata" });

   a= new Date();
    time = a.toLocaleString("en-US", { timeZone: "america/Los_Angeles" });
    //  alert(time);
    document.getElementById('time_countries').innerHTML = america_time;
    document.getElementById('time_countries1').innerHTML = india_time;
    document.getElementById('time_countries2').innerHTML = china_time;
    document.getElementById('time_countries3').innerHTML = Bangladesh_time;
    document.getElementById('time_countries4').innerHTML = dubai_time;
    document.getElementById('time_countries5').innerHTML = afganisthan_time;
    document.getElementById('time_countries6').innerHTML = russia_time;
    document.getElementById('time_countries7').innerHTML = england_time;
    document.getElementById('time_countries8').innerHTML = qatar_time;
    document.getElementById('time_countries9').innerHTML = south_africa_time;
    document.getElementById('time_countries10').innerHTML = nepal_time;
    document.getElementById('time_countries11').innerHTML = spain_time;
   
}, 1000);

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
    search_keyword = document.getElementById("input1").value;
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
