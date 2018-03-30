$(document).keydown(function(e) {
    e.preventDefault();

    if (e.keyCode === 37) {
       // Previous
       $(".carousel-control.left").click();
       return false;
    }
    if (e.keyCode === 39) {
       // Next
       $(".carousel-control.right").click();
       return false;
    }
    if (e.keyCode === 81) {
        $("#btn").click();
        return false;
    }
});