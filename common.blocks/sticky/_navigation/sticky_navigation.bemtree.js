block('sticky').mod('navigation', true).content()(function() {
    return [
        {
            block: 'navigation',
            content: [
                /* {
                    elem: 'back',
                    content: [
                        {
                            block: 'link',
                            mods: { theme: 'ergo' },
                            url: '/',
                            content: '<i class="material-icons">&#xE5C4;</i>'
                        }
                    ]    
                }, */
                {
                	block: 'menu',
                	mix: { block: 'header', elem: 'navigation' },
                	mods : { theme : 'ergo', 'top': true, type: 'horizontal', size: 'm', navigation: true },
                	/* content: [
                        {
                            block: 'menu-item',
                            mods : { type : 'link' },
                            content : {
                                block : 'link',
                                url : '#',
                                content: [
                                    {
                                        block: 'icon',   
                                        mods: { home: true },
                                        cls: 'material-icons',
                                        content: '&#xE88A;'
                                    }
                                ]
                            }
                        },        
                		{
                			block: 'menu-item',
                			mods : { type : 'link' },
        					content : {
        						block : 'link',
        						url : '#1',
        						content : 'Котнакты'
        					}
                		},
                		{
                			block: 'menu-item',
                			mods : { type : 'link' },
        					content : {
        						block : 'link',
        						url : '#2',
        						content : 'Полезное'
        					}
                		}
                	] */
                }
            ]
        },
        {
            block: 'cart',
            mods: { theme: 'ergo', size: 'l', button: 'icon' },
            // content: 'Cart'
        }
    ];
});
