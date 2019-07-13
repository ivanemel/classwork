var modal = document.querySelector('.modal');

function toggleModal(){
	if (modal.classList.contains('visible')){
		modal.classList.remove('visible');
	}else{
		modal.classList.add('visible');
	}
}


var clickMeButton = document.getElementById("clickme");
var closeButton = document.getElementById("close");


clickMeButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);