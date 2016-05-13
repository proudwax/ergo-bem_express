block('goods-list').elem('container').content()(function() {

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
												urlInfo: item.url.tech
											},
											{
												elem: 'price',
												price_current: item.price.current,
												price_old: item.price.old
											},
											{
												elem: 'action',
												hash: item.hash,
												urlInfo: item.url.tech,
												urlCart: item.url.cart.replace(/\/netcat\/modules\/minishop\/index\.php/g, '/cart/')
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

	return getBemJson(this.data['goods-list']);
	/* return getBemJson(this.dataGoods); */
});
