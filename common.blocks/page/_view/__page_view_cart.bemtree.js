block('page').mod('view', 'cart').content()(function() {
    return [
		{
            block: 'section',
            content: [
				{
					block: 'header'
				},
				{
					block: 'sticky',
					mods: { theme: 'ergo', navigation: true }
				}
			]
		},
		{
            block: 'section',
			content: [
				{
                    block: 'cart',
                    mods: { main: true }
                }			
			]
		},
        {
            block: 'footer'
        }
    ];
});
