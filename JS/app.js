
var checkBoxArray = document.getElementsByClassName('checkBox');
var selectAll = document.getElementById('selectAll');

function clickBox(){

	for(var i=0; i<checkBoxArray.length; i++){
		if(checkBoxArray[i].checked == false){
			checkBoxArray[i].checked = true;
		} else 
			checkBoxArray[i].checked = false;
	}

};

selectAll.addEventListener('click', clickBox, false);