$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    let value = $(this).siblings(".description").val()
    let time = $(this).parents().attr("id")
    localStorage.setItem(time, value);
  });
  function hour() {
    let currenthour = moment().hours();


    //COLOR CODE DAY BASED ON PAST,PRESENT,FUTURE
    $(".time-block").each(function () {
      let blockhour = parseInt($(this).attr("id").split("-")[1]);
      if (blockhour < currenthour) {
        $(this).addClass("past");
      } else if (blockhour === currenthour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
    hour();
  var interval = setInterval(hour, 15000);
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
  $("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss"))

// localStorage.getItem(time, value)
//   var timeDisplay = moment().format("MMMM Do YYYY hh:mm:ss");

  // var timeDiv = $("#currentTime");
  // timeDiv.append(timeDisplay);
  //GENERATE BLOCKS OF TIME
  //WHEN PAGE REFRESH USER DATA REMAINS SAVED LOCALLY

  //WHEN PAGE REFRESH USER DATA REMAINS SAVED LOCALLY
  //SAVE USER INUPT DATA
 
 
  
  
});
