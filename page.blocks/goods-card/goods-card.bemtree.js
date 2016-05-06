block('goods-card').content()(function() {
	
	var goods = ({
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
			"desc": "<ul><li>100% натуральный хлопок</li><li>вес ребёнка до 20кг</li><li>кармат с застёжкой на молнии</li></ul>"
		});
	
	function buildElemLable(price_current, price_old){
		if(price_old != undefined){
			var percent = Math.ceil(100 - ((price_current / price_old) * 100));
			return {
				elem: 'lable',
				content: 'до -' + percent + ' %'
			};
		}
	}

	function buildElemPrice(price_current, price_old){
		if(price_old != undefined){
			return [
				{
					elem: 'price_current',
					content: [
						{
							elem: 'price_old',
							content: goods.price.old
						},
						goods.price.current
					]
				}
			];
		}else{
			return {
				elem: 'price_current',
				content: goods.price.current
			};
		}
	}

	var images = goods.image.map(function(image){
		return {
			elem: 'image',
			content: image
		}
	});

	return [
		{ 
			block : 'row', 
			content: [
				{
					elem : 'col',
					elemMods : { 8: true },
					content: [
						{
							block: 'section',
							content: [
								{
									block: 'goods-card',
									elem: 'information',
									content: [
										{
											elem: 'header',
											content: [
												buildElemLable(goods.price.current, goods.price.old),
												{
													elem: 'title',
													content: goods.title
												}
											]
										},
										{
											elem: 'description',
											content: [
												{
													elem: 'title',
													elemMods: { small: true },
													content: 'Описание'
												},
												goods.desc													
											]
										},
										{
											elem: 'slider',
											content: [
												{
													block: 'slider',
													mods: { 'fotorama': true },
													content: goods.image
												}
											]
										}			
									]
								}							
							]
						}
					]
				},
				{
					elem : 'col',
					elemMods : { 4: true },
					content: [
						{
							block: 'section',
							content: [
								{
									block: 'goods-card',
									elem: 'cost',
									content: [
										{
											elem: 'price',
											cls: 'goods-card_width_available',
											content: [
												'Цена:',
												buildElemPrice(goods.price.current, goods.price.old)
											]
										},
										{
											elem: 'color',
											cls: 'goods-card_width_available',
											content: [
												'Цвет:',
												{
												    block : 'select',
												    mods : { mode : 'radio', theme : 'ergo', size : 'l', width : 'available', type: 'link' },
												    name : 'color',
												    val : 1,
												    options : [
												        { 
												        	val: 1, 
												        	text: [
												        		{
												        			block: 'link',
												        			url : '?color=Green',
                													content : 'Green'
												        		}
												        	]
												        },
												        { 
												        	val: 2, 
												        	text: [
												        		{
												        			block: 'link',
												        			url : '?color=Red',
                													content : 'Red'
												        		}
												        	]	        	 
												        },
												        { 
												        	val : 3,
												        	text : [
												        		{
												        			block: 'link',
												        			url : '?color=Mint',
                													content : 'Mint'
												        		}
												        	]	
												        }
												    ]
												}
											]
										},
										{
											elem: 'action',
											cls: 'goods-card_width_available',
										},
										{
											elem: 'nav',
											content: [
												{
													block: 'sticky',
													mods: { theme: 'ergo', type: 'hidden' },
													content: [
														{
															block: 'goods-card',
															elem: 'toolbar',
															content: [
																{
																	elem: 'image',
																	content: goods.preview
																},
																{
																	elem: 'name',
																	content: goods.title
																},
																{
																	elem: 'price_current',
																	content: goods.price.current
																}
															]
														},
														{
															block: 'goods-card',
															elem: 'action'
														}
													]
												}	
											]
										}
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
