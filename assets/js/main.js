function mobileMenu() {
	const menu = document.querySelector('.welcome-menu');
	const burgerMenu = document.querySelector('.mobile-burger-menu__elements');

	menu.addEventListener('click', closeBtn);

	function closeBtn() {
		this.style.transform = 'translateX(-15em)';
	}

	burgerMenu.addEventListener('click', function() {
		console.log('clicked');
		menu.style.transform = 'translateX(0em)';
		// $(this).toggleClass('close')
	});

	//! Close btn SideBar Nav Menu
	document
		.querySelector('#mobile-nav-menu ul li a')
		.addEventListener('click', function() {
			document.querySelector('#mobile-nav-menu').removeClass('active');
			// $menu.removeClass('close')
		});
}
// mobileMenu();

// function hamburgerAnimation () {
//   const burgerMenu = document.querySelector('.mobile-burger-menu__elements')

//   burgerMenu.addEventListener('click', function () {
//     console.log('clicked')
//     document.querySelector('#mobile-nav-menu').toggleClass('active')
//     $(this).toggleClass('close')
//   })

//   //! Close btn SideBar Nav Menu
//   document.querySelector('#mobile-nav-menu ul li a').addEventListener('click', function () {
//     document.querySelector('#mobile-nav-menu').removeClass('active')
//     // $menu.removeClass('close')
//   })
// }
// hamburgerAnimation()
