window.addEventListener("submit", validate);

function validate(e) {
	var form = e.target;

	var requiredFields = form.getElementsByClassName("leadinput__input--required"),
		errorMessages = form.getElementsByClassName("leadinput__errormessage");
		
	window.hasError = false;

	for (var i = 0; i < requiredFields.length; i++) {
		(function(_i){
			checkfield(requiredFields[_i], errorMessages[_i]);
		})(i);
	}

	if (window.hasError === true) {
		e.preventDefault();
	}
}

function checkfield(field, messageContainer) {
	var isEmpty = checkIfEmpty(field),
		isWrongEmail = checkEmail(field),
		isWrongZip = checkZip(field),
		isWrongPhone = checkPhone(field),
		errorMessage = "";

	messageContainer.innerText = "";

	if (isEmpty) {
		window.hasError = true;
		errorMessage += "Dit veld mag niet leeg zijn.";
	}
	if (isWrongEmail) {
		window.hasError = true;
		errorMessage += " Dit is geen geldig e-mail adres";
	}
	if (isWrongZip) {
		window.hasError = true;
		errorMessage += " Dit is geen geldige postcode";
	}
	if (isWrongPhone) {
		window.hasError = true;
		errorMessage += " Dit is geen geldig telefoonnummer, graag invoeren zonder streepjes of spaties";
	}

	if (errorMessage !== "") {messageContainer.innerText = errorMessage}
}

function checkIfEmpty(field) {
	return field.value == "" ? true : false;
}

function checkEmail(field) {
	if (field.type !== "email") {return false}
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) {
		return false;
	} else {
		return true;
	}
}

function checkZip(field) {
	if (field.name !== "zipcode") {return false}
	if (/[0-9]{4}[a-zA-Z]{2}/.test(field.value)) {
		return false;
	} else {
		return true;
	}
}

function checkPhone(field) {
	if (field.name !== "phone") {return false}
	if (/[0-9]{10}/.test(field.value)) {
		return false;
	} else {
		return true;
	}
}