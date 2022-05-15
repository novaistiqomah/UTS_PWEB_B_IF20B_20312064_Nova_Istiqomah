// fungsi jika tombol back to top di klik
$("#backtotop").click(function () {
	$("body,html").animate({
	    scrollTop: 0
	}, 600);
});

// fungsi untuk menyembunyikan dan menampilkan icon back to top
$(window).scroll(function () {
	if ($(window).scrollTop() > 150) {
	    $("#backtotop").addClass("visible");
	} else {
	    $("#backtotop").removeClass("visible");
	}
});