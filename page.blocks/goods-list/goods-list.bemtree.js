block('goods-list').content()(function() {
	var items = this.data['goods-list'];
	/* var items = ([
		{
			"goods-id": 1,
			"title": "Ergobaby — Organic Navy",
			"name": "Organic Navy",
			"category": 2,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo1.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo1-1.jpg"
			],
			"price":
				{
					"old": 10000,
					"current": 7500
				},
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		},
		{
			"goods-id": 2,
			"title": "Ergobaby — Organic Bundle of Joy - Navy",
			"name": "Organic Bundle of Joy - Navy",
			"category": 2,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo2.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo2.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo2-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo2-2.jpg"
			],
			"price":
				{ "current": 10000 },
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		},
		{
			"goods-id": 3,
			"title": "Ergobaby — Original Bundle of Joy - Black/Camel",
			"name": "Original Bundle of Joy - Black/Camel",
			"category": 2,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo3.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo3.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo3-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo3-2.jpg"
			],
			"price":{ "current": 10000 },
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		},
		{
			"goods-id": 4,
			"title": "Ergobaby — Organic Zen",
			"name": "Organic Zen",
			"category": 3,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo4.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo4.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo4-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo4-2.jpg"
			],
			"price":{ "current": 10000 },
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		},
		{
			"goods-id": 6,
			"title": "Ergobaby — Organic Quartz",
			"name": "Organic Quartz",
			"category": 4,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo6.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo6.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo6-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo6-2.jpg"
			],
			"price":{ "current": 10000 },
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		},
		{
			"goods-id": 5,
			"title": "Ergobaby — Organic Dandelion",
			"name": "Organic Dandelion",
			"category": 4,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo5.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo5.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo5-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo5-2.jpg"
			],
			"price":{
				"old": 15000,
				"current": 10000
			},
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		},
		{
			"goods-id": 7,
			"title": "Ergobaby — Organic Dark Cocoa",
			"name": "Organic Dark Cocoa",
			"category": 2,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo7.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo7.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo7-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo7-2.jpg"
			],
			"price":{ "current": 10000 },
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		},
		{
			"goods-id": 8,
			"title": "Ergobaby — Original Teal",
			"name": "Original Teal",
			"category": 3,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo8.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo8.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo8-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo8-2.jpg"
			],
			"price":{ "current": 10000 },
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		},
		{
			"goods-id": 9,
			"title": "Ergobaby — Original Red",
			"name": "Original Red",
			"category": 3,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo9.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ru/assets/i/promo9.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo9-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo9-2.jpg"
			],
			"price":{ 
				"old": 20000,
				"current": 10000
			},
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		},
		{
			"goods-id": 10,
			"title": "Ergobaby — Original Indigo Mint Dots",
			"name": "Original Indigo Mint Dots",
			"category": 3,
			"preview": "http://ergobaby.yazvyazda.ru/assets/i/promo10.jpg",
			"image": [
				"http://ergobaby.yazvyazda.ruhttp://ergobaby.yazvyazda.ru/assets/i/promo10.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo10-1.jpg",
				"http://ergobaby.yazvyazda.ru/assets/i/promo10-2.jpg"
			],
			"price":{ "current": 10000 },
			"desc": "Назначение — городской",
			"url": 
				{
					"info": "/1",
					"cart": "/1_cart"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		}
	]); */

	function buildElemLable(price_current, price_old){
		if(price_old != undefined && price_old != ''){
			var percent = Math.ceil(100 - ((price_current / price_old) * 100));
			return {
				elem: 'lable',
				content: 'до -' + percent + ' %'
			};
		}
	}

	function getBemJson(json){
		return json.map(function(item){
			return {
				elem: 'item',
				js: { filter: item.category },
				content: [
					{
						block: 'goods',
						js: {	
							'goods-id': item['goods-id'], 
							title: item.title, 
						},
						mods: { 'border': true, 'showcase': true },
						content: [
							{
								elem: 'container',
								content: [
									buildElemLable(item.price.current, item.price.old),
									{
										elem: 'image',
										content: [
											{
												block: 'image',
												mods: { lazy: true },
												url: item.preview,
												alt: item.name												
											}
										]
									},
									{
										elem: 'content',
										content: [
											{
												elem: 'name',
												content: item.name,
												urlInfo: item.url.info
											},
											{
												elem: 'price',
												price_current: item.price.current,
												price_old: item.price.old
											},
											{
												elem: 'action',
												hash: item.hash,
												urlInfo: item.url.info,
												urlCart: item.url.cart
											}
										]
									}
								]
							}
						]
					}			
				]
			}
		});
	}

	return getBemJson(items);
});
