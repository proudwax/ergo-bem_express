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
					"cart": "/1_cart",
					"tech": "/infoblock/id/"
				},
			"hash": "1fa5f5377f916b649d3ee04317d9ab9f "
		}
	]); */

	function buildElemLable(price_current, price_old){
		if(price_old != undefined && price_old != '' && price_current != price_old){
			var percent = Math.ceil(100 - ((price_current / price_old) * 100));
			return {
				elem: 'lable',
				content: 'до -' + percent + ' %'
			};
		}
	}

	function replaceUrl(url, pattern){
	}

	function getBemJson(json){
		return json.map(function(item){
			// console.log(item.url);

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
						// cartStatus: item.cart_status,
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
												urlInfo: item.url.tech + '/'
											},
											{
												elem: 'price',
												price_current: item.price.current,
												price_old: item.price.old
											},
											{
												elem: 'action'
												// hash: item.hash,
												// urlInfo: item.url.tech,
												// urlCart: item.url.cart.replace(/\/netcat\/modules\/minishop\/index\.php/g, '/cart/')
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
