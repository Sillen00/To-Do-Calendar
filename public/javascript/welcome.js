window.addEventListener("DOMContentLoaded", showCurrentDay);


/**This shows the current date and time in right format */
function showCurrentDay() {
    const today = new Date();

    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let time = today.toLocaleTimeString("sv-SE");
    let dayString = "";
    
  
    switch (day) {
        case 0:
          dayString = "Söndag";
          break;
        case 1:
          dayString = "Måndag";
          break;
        case 2:
          dayString = "Tisdag";
          break;
        case 3:
          dayString = "Onsdag";
          break;
        case 4:
          dayString = "Torsdag";
          break;
        case 5:
          dayString = "Fredag";
          break;
        case 6:
          dayString = "Lördag";
          break;
      }
      document.getElementById("todaysDate").innerHTML = dayString + " " + date + " " + months[month] + " " + year;
      document.getElementById("time").innerHTML = time;

      setInterval(showCurrentDay, 1000);
      
}


  

