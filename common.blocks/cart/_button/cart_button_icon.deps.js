([
	{
		mustDeps: [
			{ block: 'i-bem', elem: 'dom' }
		],
		shouldDeps: [
			{ block: 'link', mods: { theme: 'ergo' } },
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