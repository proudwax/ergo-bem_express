block('goods-list')(
	js()(true),
	
	content()(function(){
		return [
			{
				elem: 'container',
				content: applyNext()
			},
			{
				elem: 'spin',
				content: [
					{
						block : 'spin',
						mods : { theme : 'ergo', size : 'l', visible : true }
					}
				]
			}
		]
	})
)