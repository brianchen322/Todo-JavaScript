
$(document).ready(function(){

	// Cool des commentaires :)
	// N'hésites pas écrire des commentaires plus globaux
	$('form').on('submit',function(event){ //prend mon form et au submit tu executes la fonction
		event.preventDefault(); // dans la fonction tu prends le premier evenement. tu evites son comportement par default

		var aAjouter =$('input[name=newelements]').val();
		$('input[name=newelements]').val("");

		// Découpe en plus petits lots.
		// Cette ligne est trop longue et devient illisible.
		var newElmt = '<div class="item">' 
			+ '<input type="checkbox" name="elementsliste" id="checkboxID"/>'
			+ '<button class="close">X</button>' + aAjouter + '</div>');

		$('.applicationToDoList').append(newElmt);
		calcul();
	});

	
	$('.applicationToDoList').on('click','#checkboxID',function(){
		$(this).parent('.item').toggleClass('barre');

		calcul();

	});

	$('.applicationToDoList').on('click','.close',function(){
		$(this).parent().remove();

		calcul();
	});


	$('#all').click(function(){
		$('.item').show();
	});

	$('#active').click(function(){
		$('.item').show();
		$('.barre').hide();
	});

	$('#completed').click(function(){
		$('.item').hide();
		$('.barre').show();
	});

	$('#clearcompleted').click(function(){
		$('.barre').remove();
		$('.item').hide();
	});



	function calcul() {
		var compteur =$('.item:not(.barre)').length;
		if(compteur <=1){
			$('p.itemleft').html(compteur + " " + 'item Left');
		}
		else
		{
			$('p.itemleft').html(compteur + " " + 'items Left');
		}
	};
});