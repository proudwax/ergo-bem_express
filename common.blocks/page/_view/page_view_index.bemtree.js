block('page').mod('view', 'index').content()(function() {
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
				},
				/*{
					block: 'slider',
                    mods: { responsive: true }
				},*/
                {
                    block: 'content',
					mods: { view: 'main' }
                }
			]
		},
        {
            block: 'section',
            content: [
        		{
                    block: 'sticky',
                    mods: { theme: 'ergo', filter: true/* , 'cart-preview': true */ },
                    panelMods: { between: true }
                }, 
        		{
                    block: 'goods-list',
					js: { source: '/catalog/', params: { 'isNaked': 1/* , 'nc_ctpl': 2000 */ } }
                }
            ]
        },
        {
            block: 'footer'
        }
    ];
});
