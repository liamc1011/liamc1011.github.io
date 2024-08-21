$(document).ready(function() {
    
    var $slide = $('.slide');
    var $carousel = $('.carousel');
    var $buttonRight = $('.carousel-button-right');
    var $buttonLeft = $('.carousel-button-left');
    var slideLength = ( parseInt($slide.css("width")) + parseInt($slide.css("margin-right")) + 
        parseInt($slide.css("margin-left")) + 2*parseInt($slide.css("border-width")) );
    var lengthToRight = slideLength;
    var lengthToLeft = slideLength;
    var misalignment = 0;

    // to determine how much more to get to the next slide:
    // scroll position mod slide length, then slide length minus previous answer
    // to determine how much to get to previous slide:
    // scroll position mod slide length
    $carousel.on('scroll', function() {
        misalignment = $carousel.scrollLeft() % slideLength;
        if (misalignment == 0) {
            lengthToLeft = slideLength;
            lengthToRight = slideLength;
        } else {
            lengthToLeft = misalignment;
            lengthToRight = slideLength - misalignment;
        }

    });

    // whether the slide animation is happening now or not
    // used in debounce function (on leading edge) for the buttons 
    var animatingNow = false;

    $buttonRight.on('click', function() {
        debounce(function() {
            $carousel.animate( {scrollLeft: '+=' + lengthToRight}, 500 );
        })
    });
        
    $buttonLeft.on('click', function() {
        // if (animatingNow) {
        //     return;
        // } else {
        //     animatingNow = true;
        //     console.log(animatingNow);
        //     $carousel.animate( {scrollLeft: '-=' + lengthToLeft} , 500);
        //     // wait 500ms (until animation done) to set animatingNow back to false
        //     setTimeout( function() {animatingNow = false} , 500);
        // }
        debounce(function() { 
            $carousel.animate( {scrollLeft: '-=' + lengthToLeft}, 500 );
        });
    });
    
    // Debounce executes given animation if not in the middle of another animation.
    function debounce(animation){
        if (animatingNow == true) { // if animation is currently happening, no other animations will execute
            return;
        } else {
            animatingNow = true;    // makes any other calls to debounce() just return 
            animation();    // do given animation
            // wait 500ms (until animation done) to set animatingNow back to false
            setTimeout( function() {animatingNow = false} , 500); 
        }
    }
            
            
});
