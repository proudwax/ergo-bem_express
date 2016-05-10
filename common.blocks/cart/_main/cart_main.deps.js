([
    {
        mustDeps: [
			{ block: 'i-bem', elem: 'dom' }
		],
        shouldDeps: [
			{ block: 'link', mods: { theme: 'ergo' } },
			{ block: 'cart-item', mods: { view: 'cart' } }
		]
    },
    {
        tech: 'js',
        mustDeps: [
            { block: 'rub', tech: 'bemhtml' }
        ]
    }
])