([
	{
		mustDeps: [
			{ block: 'i-bem', elem: 'dom' }
		],
		shouldDeps: [
			{ block: 'button', mods: { theme: 'ergo', cart: true } },
			{ block: 'get-ending' }
		]
	},
    {
        tech: 'js',
        mustDeps: [
            { block: 'rub', tech: 'bemhtml' }
        ]
    }
])