var oneOpen = false;

function closeAll(){
	var divs = document.querySelectorAll(".accordion div");

	for (var i=0; i < divs.length; i++){
		divs[i].style.height =0;}
}

function toggle(button){
	var innerDiv = button.target.nextElementSibling;

	if (oneOpen){
		closeAll();
	}

	if (innerDiv.style.height === "0px" || innerDiv.style.height === ""){
		innerDiv.style.height = innerDiv.scrollHeight + "px";
		oneOpen = true;
	}else{
		innerDiv.style.height = 0 ;
	}
	if ( oneOpen = true && innerDiv.style.height > 0){
		closeAll();
	}
}

var buttons  = document.querySelectorAll(".accordion button");

for (var i=0; i < buttons.length; i++){
	buttons[i].addEventListener('click', toggle);
}