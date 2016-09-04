var link = document.querySelector('.search-button');
var popupForm = document.querySelector(".login-form");
var close = document.querySelector(".popup-form-close");

link.addEventListener('click', function(event) {
popupForm.classList.add('login-form-show');
    });
close.addEventListener("click", function(event) {
	event.preventDefault();
	popupForm.classList.remove("login-form-show");
})


window.addEventListener('keydown', function(event) {
	if (event.keyCode == 27) {
		if (popupForm.classList.contains('login-form-show')) {
		popupForm.classList.remove('login-form-show');
		}
	}

});
