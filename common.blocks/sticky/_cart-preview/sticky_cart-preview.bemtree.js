block('sticky').mod('cart-preview', true).content()(function() {

	var cart = (
		{
			"count": 3,
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
	
	function blockCartPopup(data){
		if(data.list != 0){
			return {
				block: 'cart-popup',
				js: true,
				content: [
					{
						elem: 'header',
						count: data.count,
						total: data.total
					},
					{
						elem: 'list',
						content: [
							elemListList(data.list)
						]
					},
					{
						elem: 'footer'
					}
				]
			}
		}else{
			return {
				block: 'cart-popup',
				content: 'Корзина пуска'
			}
		}
	}

	function elemListList(items){
		return items.map(function(item){
			return {
				/*elem: 'item',
				content: [
					{*/
						block: 'cart-item',
						mods: { view: 'cart-popup' },
						js: { 'goods-id': item['goods-id'], 'name': item.name, 'price': item.price.current, 'count': item.count },
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
								elem: 'trash',
								url: '#' + item['goods-id']
							}
						]
					}				
					/* {
						block: 'cart-item',
						mods: { view: 'cart-popup' },
						id: item['goods-id'],
						content: [
							{
								elem: 'image',
								url: item.preview
							},
							{
								elem: 'name',
								content: item.name
							},
							{
								elem: 'trash',
								url: '#' + item['goods-id']
							}
							{
								elem: 'price',
								price_old: item.price.old,
								price_current: item.price.current
							}
						]
					} */
				/*]
			}*/
		});	
	}

    return [
		applyNext(),
		{
			elem: 'col',
			content: [
				{
					block: 'cart-preview',
					js: true,
					content: [
						{
							block : 'button',
							mods : { theme : 'ergo', size : 'm' },
							text : 'Корзина',
							icon: {
								block: 'icon',
								cls: 'material-icons',
								content: '&#xE8CC;'
							},
							badge: cart.count
						},
						{
							block : 'popup',
							mods : { theme : 'ergo', target : 'anchor', autoclosable : true, 'cart': true, 'tail': true },
							mainOffset : 13,
							directions : ['bottom-right', 'top-right'],
							content: [
								{
									elem: 'container',
									content: [
										blockCartPopup(cart)
									]
								}
							]
						}
					]
				}
			]
		}
    ];
});