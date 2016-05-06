([
    {
        mustDeps: [
			{ block: 'i-bem', elem: 'dom' }
		],
        shouldDeps: [
			{ block: 'lable' },
			{ block: 'button', mods: { theme: 'ergo' } },
			{ block: 'input', mods: { theme: 'ergo', 'has-clear' : true, type: '*' } }
		]
    }
])