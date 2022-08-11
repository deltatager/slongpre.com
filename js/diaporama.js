$(document).ready(function(){
	slideshow();
	});

function slideshow(){
	$("#img1").delay(5000).fadeOut(2000, function(){
		$("#img2").delay(5000).fadeOut(2000, function(){
			$("#img3").delay(5000).fadeOut(2000, function(){
				$("#img1").delay(5000).fadeIn(2000, function(){
					$("#img2").show();
					$("#img3").show();
					slideshow();
				});
			});
		});	
	});						 
}