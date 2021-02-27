//SAVE USER INUPT DATA
//GENERATE BLOCKS OF TIME
//COLOR CODE DAY BASED ON PAST,PRESENT,FUTURE
//WHEN PAGE REFRESH USER DATA REMAINS SAVED LOCALLY

$(document).ready(function(){
$('.savebutton').on('click', function(){
let value = $(this).siblings('.description').val();
let time = $(this).parent().attr('id')

localStorage.setItem(time,value)
})
function hour(){
let currenthour = moment().hours()

$('.time-block').each(function(){
let blockhour = parseInt($(this).attr('id').split('-')[1])
if(blockhour < currenthour){
    $(this).addClass('past')
}
else if (blockhour === currenthour){
    $(this).addClass('present')
    $(this).removeClass('past')    

} else{
    $(this).removeClass('present')
    $(this).removeClass('past')
    $(this).addClass('future')

}

})


}





})