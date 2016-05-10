block('cart').mod('main', true).content()(function() {

	function elemListItem(items){
		return items.map(function(item){
			return [
				{
					block: 'cart-item',
					mods: { view: 'cart' },
					js: item,
					content: [
						{
							elem: 'content',
							content: [
								{
									elem: 'image',
									alt: item.name,
									url: item.preview
								},
								{
									elem: 'name',
									content: [
										{
											block: 'link',
											mods : { theme : 'ergo' },
											url : item['goods-id'],
											content: item.name
										},
										{
											block: 'input',
											mods: { 'invisibile': true },
											name: 'name',
											val: item.name
										}
									]
								}
							]
						},
						{
							elem: 'amount',
							content: [
								{
									block: 'amount',
									content: item.count
								}
							]
						},
						{
							elem: 'price',
							content: [
								item.price.current,
								{
									block: 'rub',
									mods: { size: 'small' }
								},
								{
									block: 'input',
									mods: { 'invisibile': true },
									name: 'price',
									val: item.price.current
								}
							]
						},
						{
							elem: 'trash',
							url: '#' + item['goods-id']
						}
					]
				}
			]
		});	
	}
	
    return [
    	{ 
    		elem: 'header',
    		content: [
				{
					elem: 'title',
					content: 'Корзина'
				},
				{
					elem: 'amount',
					content: 'Количество'				
				},
				{
					elem: 'price',
					content: 'Цена'
				}
			]
			
    	},
    	{
    		elem: 'container',
    		content: elemListItem(this.ctx.js.list)
    	},
    	{
    		elem: 'footer',
    		content: [
				{
					elem: 'total',
					content: 'Итого:'
				},
				{
					elem: 'action'
				}
			]			
    	}
    ];
});