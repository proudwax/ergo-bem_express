block('page').mod('view', 'main').content()(function() {
    var  data = this.data;

    return [
		{
			block: 'header',
            content: [
				{
                    elem: 'line',
                    content: [
                        {
        					block: 'sticky',
        					mods: { theme: 'ergo', navigation: true }
        				}
                    ]
                }
            ]
        },
		{
			block: 'breadcrumbs'
		},
        {
            block: 'content',
            mods: { view: data.content }
        },
        /*{
            block: 'section',
            content: [
        		{
                    block: 'sticky',
                    mods: { theme: 'ergo', filter: true },
                    panelMods: { between: true }
                }, 
        		{
                    block: 'goods-list',
					js: { source: '/catalog/', params: { 'isNaked': 1, 'nc_ctpl': 2000  } }
                }
            ]
        },*/
        {
            block: 'footer'
        }
    ];
});
