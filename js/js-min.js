var link=document.querySelector(".search-button"),popupForm=document.querySelector(".login-form"),close=document.querySelector(".popup-form-close");link.addEventListener("click",function(a){popupForm.classList.add("login-form-show")}),close.addEventListener("click",function(a){a.preventDefault(),popupForm.classList.remove("login-form-show")}),window.addEventListener("keydown",function(a){27==a.keyCode&&popupForm.classList.contains("login-form-show")&&popupForm.classList.remove("login-form-show")});