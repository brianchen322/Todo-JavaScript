
$(document).ready(function(){
	$('form').on('submit',function(event){ //prend mon form et au submit tu executes la fonction
		event.preventDefault(); // dans la fonction tu prends le premier evenement. tu evites son comportement par default

		var aAjouter =$('input[name=newelements]').val();
		$('input[name=newelements]').val("");
		$('.applicationToDoList').append('<div class="item"><input type="checkbox" name="elementsliste" id="checkboxID"/><button class="close">X</button>' + aAjouter + '</div>');

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