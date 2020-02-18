//check off while completing a list
$("#lists").on("click","li",function(){
	$(this).toggleClass("done");
});

//delete a list when hit trash span
$("#lists").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	event.stopPropagation();
})

$($("#inputTypein")[0]).on('keypress',function(){
	if(event.which === 13){
		if($(this).val() != ""){
			$("#lists").append("<li><span class=\"fa fa-trash\"></span>"+ $(this).val() +"</li>");
			$(this).val("");
		}
		

	}

});


$(".lineUp").click(function(){
	$("#inputTypein").fadeToggle(300);
})




