
$(document).ready(function(){

	// Cool des commentaires :)
	// N'hésites pas écrire des commentaires plus globaux
	$('form').on('submit',function(event){ //prend mon form et au submit tu executes la fonction
		event.preventDefault(); // dans la fonction tu prends le premier evenement. tu evites son comportement par default

		var aAjouter =$('input[name=newelements]').val();
		$('input[name=newelements]').val("");

		// Découpe en plus petits lots.
		// Cette ligne est trop longue et devient illisible.


		// Attention, tu utilises un id (qui identifie de manière unique un élément)
		// et tu le mets sur TOUS les nouveaux éléments !
		// Dans ton cas, tu peux sélectionner les éléments de la liste grâce 
		// à d'autres sélécteurs : name=elementsliste par exemple
		var newElmt = '<div class="item">' 
			+ '<input type="checkbox" name="elementsliste" />'
			+ '<button class="close">X</button>' + aAjouter + '</div>';

		$('.applicationToDoList').append(newElmt);
		calcul();
	});

	// Par rapport à l'id, on le maj ici. 
	// Avec le #id, je comprends que tu identifies un seul et unique élément.
	// Or, tu voulais dire 'n'imporque quel élémént de la liste'
	$('.applicationToDoList').on('click','input[name=elementsliste]',function(){
		$(this).parent('.item').toggleClass('barre');
		calcul();

	});

	$('.applicationToDoList').on('click','.close',function(){
		$(this).parent().remove();

		calcul();
	});

	/*
		Fonctions des boutons liés au dashboard
		- show all
		- show only active
		- show only completed
		- cealr completed
	*/
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


	// To update counter
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