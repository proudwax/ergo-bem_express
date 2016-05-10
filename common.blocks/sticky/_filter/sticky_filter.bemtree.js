 block('sticky').mod('filter', true).content()(function() {
    return [
		{
	        elem: 'col',
	        content: [
		        {
					block: 'sidebar',
					mods: { theme: 'ergo', size: 'm' },
					buttonText: 'Фильтр',
					buttonIcon: {
						block: 'icon',
						cls: 'material-icons',
						content: '&#xE896;'
					}
				}/*,
				{	
					block: 'filter'
				}*/
	        ]
	    },
	    {
	    	elem: 'col',
	        content: [
	        	{
	        		block: 'sort'
	        	}
	        ]
	    }
    ];
});
