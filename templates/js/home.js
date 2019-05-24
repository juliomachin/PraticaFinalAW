$(document).ready(function(){

	$("#ln").click(function(e){
		e.preventDefault();
		$.ajax({
			type : 'POST',
			url: "/?id=" + $("#un")[0].value + "&p=" + $("#ps")[0].value,
			success : function(data){
				console.log("success");
			},
			error : function(data){
				console.log("failure");
			}
		});
	});



});