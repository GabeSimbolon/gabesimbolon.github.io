// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var href = $(this).attr('href');
    // tangkap elemen di dalam atribut
    var elemenhref = $(href);
    
    $('html').animate({
        scrollTop: elemenhref.offset().top -50
    }, 1000, 'easeInOutElastic');

    e.preventDefault();
});

$('.page-scroll2').on('click', function(){

    // ambil isi href
    var href = $(this).attr('href');
    // tangkap elemen di dalam atribut
    var elemenhref = $(href);
    
    $('html').animate({
        scrollTop: elemenhref.offset().top -50
    }, 1000, 'easeInOutElastic');

    
});

$('.wrapper-skill'), function(){
    add
}


