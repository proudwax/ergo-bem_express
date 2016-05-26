block('header').content()(function() {
	var data = this.data; 			// Пришла из data.json 
	
    return [
    	{
            elem: 'line',
            mix: { block: 'row' },
            content: [
                {
            		elem: 'logo',
            		content: [
                        {
                            elem: 'wrapped',
                            content: [
                    			{
                    				block: 'logo',
                                    href: '/',
        							url: data.logo
                    			}
                            ]
                        }
            		]
            	},
            	{
            		elem: 'contact',
            		content: [
                        {
                            elem: 'wrapped',
                            content: [
                    			{
                    				block: 'contact',
        							phone: data.tel,
        							email: data.email
                    			}
                            ]
                        }
            		]
            	},
            	{
            		elem: 'cart-info',
            		content: [
                        {
                            elem: 'wrapped',
                            content: [
                    			{
                    				block: 'cart',
                                    mods: { info: true }
                    			}
                            ]
                        }
            		]
            	}
            ]
        },
        applyNext()
    ];
});
