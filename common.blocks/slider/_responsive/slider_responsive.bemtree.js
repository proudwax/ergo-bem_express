block('slider').mod('responsive', true).content()(function() {
	
	var slides = ([
		{
			// "image": "http://ergobaby.yazvyazda.ru/assets/i/dollcarrier.jpg",
			"image": "http://lorempixel.com/1250/400/?",
			"container": {
				"mods": { "position": "right", "title-shadow": "true", "background": true },
				"title": "slide 1",
				"text": "Text text text"
			}
		},
		{
			// "image": "http://ergobaby.yazvyazda.ru/assets/i/performance.jpg",
			"image": "http://lorempixel.com/1250/400/?",
			"container": {
				"mods": { "position": "right", "background": true },
				"title": "Много необычных, красивых и при этом удивительно полезных штук"
			}
		},
		{
			// "image": "http://ergobaby.yazvyazda.ru/assets/i/coolair.jpg",
			"image": "http://lorempixel.com/1250/400/?",
			"container": {
				"mods": { "theme": "white", "position": "right", "background": true },
				"title": "Прятки  — новая коллекция",
				"text": "Короткая история о том, как спрятался тот, кто обычно находит."
			}
		}
	]);

	var elem_slides = slides.map(function(slide){
		return {
			elem: 'slide',
			// bg: slide.image,
			bg: slide.image + Math.random(),
			content: [
				{
					elem: 'container',
					mods: slide.container.mods,
					title: slide.container.title,
					text: slide.container.text
				}
			]
		}
	});

	return ([
		{
			elem: 'wrapper',
			content: elem_slides
		},
		{
			elem: 'button',
			elemMods: { 'prev': true }
		},	
		{
			elem: 'button',
			elemMods: { 'next': true }
		},	
		{
			elem: 'pagination'
		}
	]);

	
})