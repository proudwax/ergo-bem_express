block('slider').mod('with-thumbs', true).content()(function() {
	
	var slides = ([
		{
			// "image": "http://ergobaby.yazvyazda.ru/assets/i/dollcarrier.jpg",
			"image": "http://lorempixel.com/1250/400/?",
		},
		{
			// "image": "http://ergobaby.yazvyazda.ru/assets/i/performance.jpg",
			"image": "http://lorempixel.com/1250/400/?",
		},
		{
			// "image": "http://ergobaby.yazvyazda.ru/assets/i/coolair.jpg",
			"image": "http://lorempixel.com/1250/400/?",
		},
		{
			// "image": "http://ergobaby.yazvyazda.ru/assets/i/coolair.jpg",
			"image": "http://lorempixel.com/1250/400/?",
		},
		{
			// "image": "http://ergobaby.yazvyazda.ru/assets/i/coolair.jpg",
			"image": "http://lorempixel.com/1250/400/?",
		},
		{
			// "image": "http://ergobaby.yazvyazda.ru/assets/i/coolair.jpg",
			"image": "http://lorempixel.com/1250/400/?",
		}
	]);

	var elem_slides = slides.map(function(slide){
		return {
			elem: 'slide',
			// bg: slide.image,
			bg: slide.image + Math.random(),
		}
	});

	console.log(elem_slides);

	return ([
		{
			elem: 'slider',
			content: [
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
				}
			]
		},
		{
			elem: 'thumbs',
			content: [
				{
					elem: 'wrapper',
					content: elem_slides
				}			
			]
		}
	]);

	
})