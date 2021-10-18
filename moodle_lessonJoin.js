//Generic script for cmn.math.tusur.ru
//Inject to: https://cmn.math.tusur.ru/*

function join_withsound(){
	//<button aria-label="Только слушать" aria-disabled="false" class="jumbo--Z12Rgj4 buttonWrapper--x8uow audioBtn--1H6rCK"><span class="button--Z2dosza jumbo--Z12Rgj4 default--Z19H5du circle--Z2c8umk"><i class="icon--2q1XXw icon-bbb-listen"></i></span><span class="label--Z12LMR3">Только слушать</span></button>

	document.querySelector('button[aria-label="Только слушать"]').click();
};

function allow_sound(){
	//<button aria-label="Проиграть звук" aria-disabled="false" class="jumbo--Z12Rgj4 buttonWrapper--x8uow button--Z23moYP"><span class="button--Z2dosza jumbo--Z12Rgj4 success--Z6UU8x circle--Z2c8umk"><i class="icon--2q1XXw icon-bbb-thumbs_up"></i></span><span class="label--Z12LMR3">Проиграть звук</span></button>

	document.querySelector('button[aria-label="Проиграть звук"]').click();
};

function when_loaded(){
	try{

		join_withsound();
		setTimeout('allow_sound()',10000);	//Wait for allow sound request

	} catch(error){

		alert(error);

	};
};

setTimeout('when_loaded()',10000);	//Wait for loading
