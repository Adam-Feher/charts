$(document).keydown(function(e) {

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
        $("#btn")[0].click();
        return false;
    }
    if(e.keyCode === 87) {
        $("#sb_vs_btn")[0].click();
        return false;
    }
    if(e.keyCode ===67) {
        $("#bb_vs_btn")[0].click();
        return false;
    }
    if(e.keyCode === 82) {
        $("#bvb")[0].click();
        return false;
    }
    if(e.keyCode===84) {
        $("#hu")[0].click();
        return false;
    }
});