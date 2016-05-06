block('order-contacts').content()(function() {

	var order = (
		[
			{
				"block": "input",
				"lable": "Имя",
				"options": {
					"type": "text",
					"name": "name", 
					"placeholder": "Имя" 
				}
			},
			{
				"block": "input",
				"lable": "Фамилия",
				"options": {
					"type": "text",
					"name": "name", 
					"placeholder": "Фамилия" 
				}
			},
			{
				"block": "input",
				"lable": "Телефон",
				"options": {
					"type": "tel",
					"name": "tel", 
					"placeholder": "+7 (000) 000-0000" 
				}
			},
			{
				"block": "input",
				"lable": "Email",
				"options": {
					"type": "email", 
					"name": "mail",
					"placeholder": "Email" 
				}
			},
			{
				"block": "input",
				"lable": "Адрес",
				"options": {
					"type": "geo", 
					"name": "address",
					"placeholder": "Адрес" 
				}
			},
			{
				"block": "input",
				"lable": "Индекс",
				"options": {
					"type": "postindex", 
					"name": "postindex",
					"placeholder": "195000" 
				}				
			}
		]
	);
	
	function getInput(items){
		return items.map(function(item){
			return {
				elem: 'input',
				content: [
					{
						block: 'lable',
						content: item.lable + ':'
					},
					{
						block: item.block,
						mods: { theme: 'ergo', size: 'l', 'has-clear' : true, type: item.options.type },		
						placeholder: item.options.placeholder,
						name: item.options.name
					}
				]
			}
		});
		
	}
	
    return [
    	{ 
    		elem: 'header',
    		content: [
				{
					elem: 'title',
					content: 'Контактные данные'
				}
			]
    	},
		{
			elem: 'content',
			content: getInput(order)
		},
		{
			elem: 'footer',
			content: [
				{
					block: 'button',
					mods: { theme : 'ergo', size : 'l', view : 'action', type : 'submit' },
					text: 'Отправить',
					icon: {
						block: 'icon',
						cls: 'material-icons',
						content: '&#xE163;'
					}
				}
			]
		}
    ];
});