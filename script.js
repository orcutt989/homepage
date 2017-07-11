$(document).ready(function() {
    $('div').effect('slide',{direction:'down'},1000,function(){
        $('i').effect("bounce",{times:1},450);
    });
    $('p').draggable();
    $('h2').draggable();
    $('h1').draggable();
    $('i').draggable();
})