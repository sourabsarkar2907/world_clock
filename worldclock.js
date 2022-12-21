

let time;
let a;
let int = null;



function gettime() {
    clearInterval(int);
        a = new Date();
                time = a.toLocaleString("en-US", { timeZone: "Asia/Shanghai" });
                 
            
                //  alert(time);
                 document.getElementById('123').innerHTML = "CHINA:"+ time;
                  int=setInterval(gettime, 1000);
   
}
    


    

// function india() {
    
//     clearInterval(gettime);
//          new Date();
//         time = a.toLocaleString("en-US", { timeZone: "Asia/kolkata" });
   
//                  document.getElementById('123').innerHTML = time;
//                 setInterval(india, 1000);
      
                
//     }

    function india() {
        clearInterval(int);
            a = new Date();
                    time = a.toLocaleString("en-US", { timeZone: "Asia/kolkata" });
                     
                
                    //  alert(time);
                     document.getElementById('123').innerHTML = "KOLKATA/INDIA:"+ time;
                      int=setInterval(india, 1000);
       
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
