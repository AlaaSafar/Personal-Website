var $links = $(".itemLinks");// الأزرار التنقل 

$links.click(function (e) {
    $links.removeClass("active");// active أزالة 
    var clickedLink = e.target;//  تحديد العنصر مضغوط عليه 
    clickedLink = $(clickedLink);// تحكم على العنصر مضغوط عليه
    var position = clickedLink.attr("data-pos");
    var translateValue ="translateX("+ position * 25 +"%)"; // النسبة أزاحة 
    $("#wrapper").css({
        transform:translateValue// translateValue الى translateXتحويل 
    });

    clickedLink.addClass("active");

});

$($links[0]).addClass("active");//  active إضافة أول العنصر 
