block('cart').mod('info', true).content()(function() {
	var data = this.data; 			// Пришла из data.json 
	
	return [
			{
				elem: 'cart',
				content: [
					{
						block: 'link',
						mods: { theme : 'ergo', pseudo : true },
						content: 'Корзина: '
					}					
				]
			},
			{
				elem: 'info',
				content: [
					{
						elem: 'count'
					},
					{
						elem: 'total'
					}
				]
			}
		];
	
});