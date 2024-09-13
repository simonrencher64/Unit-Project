$(document).ready(function() {
	let toggled;
	$(".gridbutton").click(function() {
		$(this).next().toggle();
		$(".gridbutton").toggle();
		toggled = $(this).next();
		$("#backbutton").toggle();
	});
	
	$("#backbutton").click(function() {
		$(".gridbutton").toggle();
		toggled.toggle();
		$(this).toggle();
	});
	
	$(".quiz").click(function() {
		$(this).next().toggle();
	});
});
