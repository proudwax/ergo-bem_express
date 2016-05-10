block('order-cart').content()(function() {
	var cart = (
		{
			"count": 4,
			"total": 37500,
			"list": [
				{
					"goods-id": 1,
					"name": "Organic Navy",
					"category": 2,
					"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo1.jpg",
					"price":
						{
							"old": 10000,
							"current": 7500
						},
					"count": 1
				},
				{
					"goods-id": 2,
					"name": "Organic Bundle of Joy - Navy",
					"category": 2,
					"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo2.jpg",
					"price":
						{ "current": 10000 },
					"count": 1
				},
				{
					"goods-id": 9,
					"name": "Original Red",
					"category": 3,
					"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo9.jpg",
					"price":{ 
						"old": 20000,
						"current": 10000
					},
					"count": 2
				}
			]
		}
	);
	
	function elemList(items){
		return items.map(function(item){
			return [
				{
					block: 'cart-list',
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
										}
									]
								}
							]
						},
						{
							elem: 'amount',
							content: item.count + ' шт.'
						},
						{
							elem: 'price',
							content: [
								item.price.current,
								{
									block: 'rub',
									mods: { size: 'small' }
								}
							]
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
					elem: 'change',
					content: [
						{
							block: 'link',
							mods: { theme: 'ergo', size: 'm' },
							url: '#',
							content: [
								{
									block: 'icon',
									cls: 'fa fa-pencil'
								},
								'Изменить заказ'
							]
						}
					]
				}
			]
			
    	},
    	{
    		elem: 'container',
    		content: elemList(cart.list)
    	},
    	{
    		elem: 'footer',
    		content: [
				{
					elem: 'total',
					count: cart.count, 
					total: cart.total
				}
			]
			
    	}
    ];
});