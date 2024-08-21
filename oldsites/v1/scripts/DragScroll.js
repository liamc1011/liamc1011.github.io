const element = document.querySelector('.carousel-track');
// element.scrollLeft = 100;

let pos = {left: 0, x: 0};
console.log(element);

const mouseDownHandler = function(e) {
    pos = {
        // the current scroll
        left: element.scrollLeft,
        // get the current mouse position
        x: e.clientX,
    };

    element.style.cursor = 'grabbing';

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    console.log('done aj');

    // const mouseMoveHandler = function(e) {
    //     // how far the mouse has moved
    //     const dx = e.clientX - pos.x;
    
    //     // scroll the element
    //     element.scrollLeft = pos.left - dx;
    // };
    
    // const mouseUpHandler = function() {
    //     element.style.removeProperty('cursor');
    // };
};

const mouseMoveHandler = function(e) {
    // how far the mouse has moved
    const dx = e.clientX - pos.x;

    // scroll the element
    element.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function() {
    element.style.removeProperty('cursor');
};

