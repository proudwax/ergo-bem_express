([
	{
		mustDeps: { block: 'i-bem', elem: 'dom' },
		shouldDeps: [
			{ elems: ['container'] },
			{ block: 'events', elems: ['channels'] },
			{ block: 'functions', elems: ['throttle'] },
			{ block: 'spin', mods: { theme: 'ergo' } },
			{ block: 'goods' },
			{ block: 'rub' },
			'history', 'uri', 'location',
			{ block: 'image' }
		]	
	}/* ,
    {
        tech: 'js',
        mustDeps: [
			{ block: 'spin', tech: 'bemhtml' },
			{ block: 'goods', tech: 'bemhtml' },
			{ block: 'goods-list', tech: 'bemhtml' },
			{ block: 'goods-list', elems: ['container'], tech: 'bemtree' },
			{ block: 'root', tech: 'bemtree' }
        ]
    } */
])