jQuery(document).ready(function(){
	$("select").change(function () {
		if($(this).val() == "0") 
		{
			$(this).addClass("ya-empty");
		}	
		else 
		{
			$(this).removeClass("ya-empty");
		}	
	});

	$("select").change();

	$( ".ya-staff-datepicker" ).datepicker({
		showOn: "button",
		buttonImage: "images/calendar.gif",
		buttonImageOnly: true
	});
});

