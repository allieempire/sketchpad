// GENERATE GRID FUNCTION
function generateGrid(gridsize) {
    for (var rows = 0; rows < gridsize; rows++) {
        for (var columns = 0; columns < gridsize; columns++) {
            $('#container').append('<div class="grid"></div>');
        };
    };
    $('.grid').width(860/gridsize);
    $('.grid').height(860/gridsize);
};

// RANDOM COLOR FUNCTION
function randomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return (r + ',' + g + ',' + b);
};

// REFRESH GRID FUNCTION
function refreshGrid() {
    $('.grid').css('background-color', 'transparent');
};

// NEW GRID FUNCTION
function newGrid() {
    var newSize = prompt('How many cells per side?');
    $(".grid").remove();
    generateGrid(newSize);
};

// DOCUMENT
$(document).ready(function() {
    generateGrid(16);
    $('.grid').hover(function() {
        $(this).css('background-color', 'rgb(' + randomColor() + ')');
    });
    $('#refresh').click(function() {
        refreshGrid();
    });
    $('#newgrid').click(function() {
        newGrid();
        $('.grid').hover(function() {
            $(this).css('background-color', 'rgb(' + randomColor() + ')');
        });
    });
});




