$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');
});

$(document).keydown(function(e) {

    if (e.keyCode === 65) {
       // Previous
       $(".carousel-control.left").click();
       return false;
    }
    if (e.keyCode === 68) {
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
    if(e.keyCode ===69) {
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