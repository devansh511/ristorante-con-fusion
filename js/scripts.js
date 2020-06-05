$(document).ready(function(){
    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle');
    });
    $('#reserveTable').click(function(){
        $('#reserveModal').modal('toggle');
    });
    $('#closeModal').click(function(){
        
        $('#reserveModal').modal('hide');
    });
    $('#closeButton1').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#closeButton').click(function(){
        $('#reserveModal').modal('hide');
    });
    $('#closeModal1').click(function(){
        
        $('#loginModal').modal('hide');
    });

});
$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }

        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    /*$('#carousel-play').click(function(){
        $('#mycarousel').carousel('cycle');
    });*/

});
/*$(document).ready(function(){
    $('[data-toggle]="tooltip"]').tooltip();

});*/