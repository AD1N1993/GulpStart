let hamburger = document.querySelector('.header-hamburger');
let curtain = document.querySelector('.curtain');
let close = document.querySelector('.close');
let menu = document.querySelector('.header-navbar');

hamburger.addEventListener('click',()=>{
	hamburger.classList.toggle('active');
	curtain.classList.toggle('active');
	menu.classList.toggle('active-menu');
})
close.addEventListener('click',()=>{
	hamburger.classList.remove('active');
	curtain.classList.remove('active');
  	menu.classList.remove('active-menu');
})