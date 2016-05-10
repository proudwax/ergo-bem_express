([
	{
		mustDeps: [
			{ block: 'i-bem', elem: 'dom' }
		],
		shouldDeps: [
			{ block: 'button', mods: { netcat: 'put' } }
		]
	},
    {
        tech: 'js',
        mustDeps: [
            { block: 'spin', tech: 'bemhtml' },
            { block: 'button', mods: { netcat: 'put' }, tech: 'bemhtml' }
        ]
    }
])