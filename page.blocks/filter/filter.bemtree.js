 block('filter').content()(function() {
    return [
	   {
			block: 'radio-group',
			mix: [{ block: 'filter', elem: 'group' }],
			mods: { theme : 'ergo', size : 'm', type : 'button', visible: true },
			name: 'radio',
			val: '',
			options: [
				{ val: '', text : 'Все' },
				{ val: 2, text : 'Original' },
				{ val: 3, text : 'Performance' },
				{ val: 4, text : 'Four Position 360' }
			]
		},
		{
			block : 'select',
			mods : { mode : 'radio', theme : 'ergo', size : 'm', 'small': true, 'tail': true },
			mix: [{ block: 'filter', elem: 'group' }],
			name: 'radio',
			text: 'Категории',
			options : [
				{ val: '', text : 'Все' },
				{ val: 2, text : 'Original' },
				{ val: 3, text : 'Performance' },
				{ val: 4, text : 'Four Position 360' }
			]
		}
    ];
});
