block('slider').mod('fotorama', true).content()(function() {
	
	var slides = this.ctx.content/*([
		{
			"image": "http://ergobaby.yazvyazda.ru/assets/i/dollcarrier.jpg",
			"image": "http://lorempixel.com/400/400/?"
		},
		{
			"image": "http://ergobaby.yazvyazda.ru/assets/i/performance.jpg",
			"image": "http://lorempixel.com/400/400/?"
		},
		{
			"image": "http://ergobaby.yazvyazda.ru/assets/i/coolair.jpg",
			"image": "http://lorempixel.com/400/400/?"
		}
	])*/;

	var images = slides.map(function(slide){
		return {
			elem: 'item',
			// bg: slide.image + Math.random(),
			bg: slide,
			content: [
				{
				    block: 'image',
				    // url: slide.image + Math.random()
				    url: slide
				}
			]
		}
	});

	return ([
		{
			elem: 'fotorama',
			content: images
		}
	]);

	
})