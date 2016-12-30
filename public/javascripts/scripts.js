$(document).ready(function(){
	$('.parallax').parallax();
	$('.button-collapse').sideNav({
		menuWidth: 180
	});
	$('#message').trigger('autoresize');
    $('.sample').matchHeight();
});

function validateMyForm() {

	var checkFieldsCount = 0;

	var errorMessage = "The following fields are required and should not be empty: \n\n"

	var getName = document.getElementById('name').value;
	var getEmail = document.getElementById('email').value;
	var getMessage = document.getElementById('message').value;

	if(getName === "") {
		errorMessage += ("Name" + "\n");
	}
	else {
		checkFieldsCount++;
	}

	if(getEmail === "") {
		errorMessage += ("Email" + "\n");
	}
	else {
		checkFieldsCount++;
	}

	if(getMessage === "") {
		errorMessage += ("Message" + "\n");
	}
	else {
		checkFieldsCount++;
	}

	if(checkFieldsCount === 3) {
		return true;
		checkFieldsCount = 0;
	}
	else {
		alert(errorMessage);
		return false;
		checkFieldsCount = 0;
		errorMessage = "The following fields are required and should not be empty: \n\n";
	}
}

