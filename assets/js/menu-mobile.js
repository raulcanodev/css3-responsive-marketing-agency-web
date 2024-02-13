document.addEventListener('DOMContentLoaded', (event) => {
	// Seleccionar mis dos elementos principales
	let mobile_btn = document.querySelector('.navbar__mobile-btn');
	let mobile_menu = document.querySelector('.menu-mobile');
	let btn_close = document.querySelector('.menu-mobile__close');

	// Funcion mostrar y ocultar menu
	const showHiddenMenu = () => {
		let show = document.querySelector('.menu-mobile--show');

		if (show) {
			mobile_menu.classList.remove('menu-mobile--show');
		} else {
			mobile_menu.classList.add('menu-mobile--show');
		}
	};

	// Al dar click mostar el menu de navegacion
	mobile_btn.addEventListener('click', showHiddenMenu);

	// Al cerrar el menu con la x
	btn_close.addEventListener('click', showHiddenMenu);

	// Al redimensionar la pantalla por encima de 1000px ocultar menu
	window.addEventListener('resize', () => {
		let window_width = parseInt(document.body.clientWidth);

		if (window_width > '1000') {
			mobile_menu.classList.remove('menu-mobile--show');
		}
	});

	// Desplegar submenus
	let menu_item = document.querySelectorAll('.menu-mobile__item');

	menu_item.forEach(item => {
		item.addEventListener('click', (event) => {
			let submenu = item.lastElementChild;

			if (submenu.className === 'menu-mobile__submenu') {
				if (submenu.style.display === 'block') {
					submenu.style.display = 'none';
				} else {
					submenu.style.display = 'block';
				}
			}
		});
	});
});
