block('sidebar').content()(function() {
    return [
    	{
			elem: 'button'
		},
		{
			elem: 'aside',
			content: [
				{
					block: 'form',
					mods: { theme: 'ergo', filter: true },
					action: '',
					method: 'get',
					/* elemButtomMods: { fixed: 'bottom', shadow: true }, */
					buttonName: 'submit',
					buttonText: 'Применить',
					buttonMods: { size: 'l', view: 'action' },
					buttonIcon: {
						block: 'icon',
						cls: 'material-icons',
						content: '&#xE164;'
					},
					content: [
						{
							elem: 'item',
							content: [
								{
									elem: 'legend',
									content: 'Категории'
								},
								{
									elem: 'content',
									content: [
										{
											block : 'checkbox-group',
											mods : { theme : 'ergo', size : 'm' },
											name : 'checkbox-line',
											options : [
												{ val : 1, text : 'Original' },
												{ val : 2, text : 'Performance' },
												{ val : 3, text : 'Four Position 360' }
											]
										}
									]
								}
							]
						},
						{
							elem: 'item',
							content: [
								{
									elem: 'legend',
									content: 'Акции'
								},
								{
									elem: 'content',
									content: [
										{
											block: 'checkbox',
											mods: { theme : 'ergo', size : 'm' },
											name: 'sale',
											val: 'true',
											text : 'со скидкой'
										}
									]
								}
							]
						}
					]
				}
			]
		},
		
    ];
});
