//تاريخ السنة الحالية 2021
$(function(){
    var currentDate = new Date();
    $('#currentYear').text(currentDate.getFullYear());
});