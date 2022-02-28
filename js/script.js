$(document).ready(function() {
	$('.faq_title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
