block('menu').mod('navigation', true).content()(function() {
    var data = this.data;
	
	return [
		{
			block: 'menu-item',
			mods : { type : 'link' },
			content : {
				block : 'link',
				url : '#',
				content: [
					{
						block: 'icon',   
						mods: { home: true },
						cls: 'material-icons',
						content: '&#xE88A;'
					}
				]
			}
		},
		data.menu.map(function(item){
			return [
				{
					block: 'menu-item',
					mods : { type : 'link' },
					content : {
						block : 'link',
						url : item.url,
						content : item.name
					}
				}
			]
		})
    ];
});
