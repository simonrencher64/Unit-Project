$(document).ready(function() {
	let toggled;
	$(".gridbutton").click(function() {
		$(this).next().toggle();
		$(".gridbutton").toggle();
		$("#bottomImage").toggle();
		toggled = $(this).next();
		$("#backbutton").toggle();
	});
	
	$("#backbutton").click(function() {
		$(".gridbutton").toggle();
		toggled.toggle();
		$(this).toggle();
		$("#bottomImage").toggle();
	});
	
	$(".quiz").click(function() {
		$(this).next().toggle();
	});
});
