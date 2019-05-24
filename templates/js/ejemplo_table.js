$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="titulo" id="titulo"></td>' +
            '<td><input type="text" class="form-control" name="genero" id="genero"></td>' +
            '<td><input type="text" class="form-control" name="anyo" id="anyo"></td>' +
            '<td><a class=""><i style="font-size:24px" class="fa">&#xf087;</i></a> <b> </b> <a class="fa" id="negative" ><i id="hand_negative" style="font-size:24px" class="fa" onclick="change_color_negative()">&#xf088;</i></a> <b> </b> <b> </b> <input type="number" class="form-control" name="puntuacion" id="puntuacion" min="1" max="10"></td>' +
			'<td> <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons" style="color: green" enabled>&#xE03B;</i></a><a class="edit" title="Edit" data-toggle="tooltip" style="color: yellow"><i class="material-icons" >&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip" style="color: red"><i class="material-icons">&#xE872;</i></a></td><td><a id="Pendiente" data-toggle="tooltip" onclick="change_color_eye()"><i style="font-size:24px" class="fa">&#xf070;</i></a></td>' +
        '</tr>';
    	$("table").append(row);		
		//$("table tbody tr").eq(index + 1).find(".add, .delete").toggle();
		//$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
		$('#edit').prop('display', false);
        $('[data-toggle="tooltip"]').tooltip();
    });

	//Boton de aceptar
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });


	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});

