block('sort').content()(function() {
	var sortList = (
		[
			{ 
				"name": "Названию",
				"desc": {
					"icon": "&#xE5C7;",
					"url": "name-asc"
				}
			},
			{ 
				"name": "Названию",
				"desc": {
					"icon": "&#xE5C5;",
					"url": "name-desc"
				}
			},
			{
				"name": "Цене",
				"desc": {
					"icon": "&#xE5C7;",
					"url": "price-asc"
				}
			},
			{ 
				"name": "Цене", 
				"desc": {
					"icon": "&#xE5C5;",
					"url": "price-desc"
				}
			},
			{ 
				"name": "Популярности",
				"desc": {
					"icon": "&#xE5C7;",
					"url": "views-asc"
				}
			},
			{ 
				"name": "Популярности",
				"desc": {
					"icon": "&#xE5C5;",
					"url": "views-desc"
				}
			}
		]
	);

	function optionList(items){
		return items.map(function(item){
			return {
	            val: item.desc.url,
	            text: item.name,	
	            icon: {
	            	block: 'icon',
	            	cls: 'material-icons',
					content: item.desc.icon
				}
	        }
		});	
	}

    return [
		{
			block : 'select',
			mods : { mode : 'radio-check', theme : 'ergo', size : 'm', 'tail': true, 'icon': true },
			popupDirections: ['bottom-right', 'top-right'],
			name: 'sort',
			text: 'Сортировать по',
			options : optionList(sortList)
		}
    ];
});