var timeBlocks = $(".container");

var timeDisplay = moment().format('MMMM Do YYYY hh:mm:ss');

var timeDiv = $("#currentTime");
timeDiv.append(timeDisplay);
//GENERATE BLOCKS OF TIME
//COLOR CODE DAY BASED ON PAST,PRESENT,FUTURE
//WHEN PAGE REFRESH USER DATA REMAINS SAVED LOCALLY

//WHEN PAGE REFRESH USER DATA REMAINS SAVED LOCALLY
//SAVE USER INUPT DATA
$(document).ready(function(){
$('.savebutton').on('click', function(){
let value = $(this).siblings('.description').val();
localStorage.setItem(time,value)
})
function hour(){
let currenthour = moment().hours()

//COLOR CODE DAY BASED ON PAST,PRESENT,FUTURE
$('.time-block').each(function(){
let blockhour = parseInt($(this).attr('id').split('-')[1])
if(blockhour < currenthour){
    $(this).addClass('past')
}
else if (blockhour === currenthour){
    $(this).addClass('present');
    $(this).removeClass('past');
    $(this).addClass('present');
    $(this).removeClass('past');    

} else{
    $(this).removeClass('present');
    $(this).removeClass('past');
    $(this).addClass('future');

    $(this).removeClass('present');
    $(this).removeClass('past');
    $(this).addClass('future');
}

})


}




});