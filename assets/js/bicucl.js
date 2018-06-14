!function ($) {
	$("a[rel=popover]").popover({
		trigger : 'manual'
	}).click(function(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		$("a[rel=popover]").popover('destroy');
		$(this).popover('show');
	});

	$('html').click(function() {
		$("a[rel=popover]").popover('destroy');
	});

	$("a[rel=tooltip]").tooltip();
	$('.datepicker').datepicker();
}(window.jQuery)