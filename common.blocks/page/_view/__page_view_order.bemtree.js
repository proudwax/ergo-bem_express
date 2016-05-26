block('page').mod('view', 'order').content()(function() {
	//var data = this.data; 			// Пришла из data.json 
		
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
				}/*,
                {
                    block: 'content',
					mods: { view: 'map' }
                }*/
			]
		},
        {
			block : 'row',
			content : [
				{
					elem : 'col',
					cls: 'row__col_6 row__col_last_portrait',
					mods : { 6: true },
					content: [
						{
							block: 'section',
							content: [
								{
									block: 'order-contacts'
								}
							]
						}
					]
				},
				{
					elem: 'col',
					cls: 'row__col_6',
					mods: { 6: true },
					content: [
						{
							block: 'section',
							content: [
								{
									block: 'order-cart',
									js: { /*total: data.total, count: data.count*/ }
								}
							]
						}
					]
				}	
			]
		},
        {
            block: 'footer'
        }
    ];
});
