// JavaScript Document
function ValidLength(item, len) {
	return (item.length >= len);
}
// function to validate an email address
function ValidEmail(item) {
	if (!ValidLength(item,5)) return false;
	if (item.indexOf('@') == -1) return false;
	if (item.indexOf('.') == -1) return false;
	return true;
}

function Validate() {
	var errorFound = false;
	if (!ValidLength(document.signIn.pwd.value, 6)) {
		document.getElementById("errorForPwd").style.display = "block";
		errorFound = true;
	}
	if (!ValidEmail(document.signIn.email.value)) {
		document.getElementById("errorForEmail").style.display = "block";
		errorFound = true;
	}
	if (!errorFound) {
		window.location.href = 'home.html';
	}
	return false;
}

const cart = {
	quantity: 0
}

// Function called from home, shop, and the individual product pages. 
function addItemToCart(number) {
	cart.quantity+=number;
	document.getElementById("cartQuantity").innerHTML = cart.quantity;
}