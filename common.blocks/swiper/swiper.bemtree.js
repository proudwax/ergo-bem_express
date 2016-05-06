block('swiper').content()(function() {
    return [
    	{
			elem: 'slide',
			mods: { 'content-position': 'right', 'title-shadow': true, 'content-background': true },
			/*bg: 'i/dollcarrier.jpg',*/
			bg: 'http://lorempixel.com/1250/400/?' + Math.random(),
			title: 'slide 1',
			text: 'Text text text'
		},
		{
			elem: 'slide',
			mods: { 'content-position': 'right', 'content-background': true },
			/*bg: 'i/performance.jpg',*/
			bg: 'http://lorempixel.com/1250/400/?' + Math.random(),
			title: 'Много необычных, красивых и при этом удивительно полезных штук'
		},
		{
			elem: 'slide',
			mods: { theme: 'white', 'content-position': 'right', 'content-background': true },
			/*bg: 'i/coolair.jpg',*/
			bg: 'http://lorempixel.com/1250/400/?' + Math.random(),
			title: [
				{
					block: 'character',
					mods: { 'aquo': true },
					content: 'Прятки'
				},
				' — новая коллекция',
			],
			
			text: 'Короткая история о том, как спрятался тот, кто обычно находит.'
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
    ];
});
