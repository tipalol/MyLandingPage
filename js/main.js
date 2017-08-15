$(document).ready(function(){
	var currentBlock = '0';
	$("#navCollapse").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$(document).on("scroll", function (event) {
		if (window.pageYOffset < 300) {
			$("#" + currentBlock).toggleClass('active');
			currentBlock = '0';
			$("#" + currentBlock).toggleClass('active');
		} else
		if (window.pageYOffset < 800) {
			$("#" + currentBlock).toggleClass('active');
			currentBlock = '1';
			$("#" + currentBlock).toggleClass('active');
		} else
		if (window.pageYOffset < 1300) {
			$("#" + currentBlock).toggleClass('active');
			currentBlock = '2';
			$("#" + currentBlock).toggleClass('active');
		} else
		if (window.pageYOffset < 2000) {
			$("#" + currentBlock).toggleClass('active');
			currentBlock = '3';
			$("#" + currentBlock).toggleClass('active');
		}
	});
});