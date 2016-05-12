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
					}
				}
			]
		},
		
    ];
});
