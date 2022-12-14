window.addEventListener("DOMContentLoaded", showCurrentDay);



function showCurrentDay() {
    const today = new Date();

    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
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





  

