block('page').mod('view', 'product').content()(function() {
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
			block: 'breadcrumbs'
		},
		{
			block: 'goods-card'
		},
		{
			block: 'section',
			content: [
				{
					block: 'goods-list'
				}
			]
		},
        {
            block: 'footer'
        }
    ];
});
