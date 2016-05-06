/* 
	this.sticky_height 	-	высота panel и backing элементов
	this.sticky_top		-	отступ сверху до обработки
*/

modules.define('sticky', ['i-bem__dom', 'jquery', 'BEMHTML', 'functions__throttle', 'events__channels'],
function(provide, BEMDOM, $, BEMHTML, throttle, channels) {

var sticky_flag = undefined;

provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js': {
            'inited': function() {
				var _this = this;
				
				this.elem('backing').css('height', this.domElem[0].offsetHeight); 
				this.sticky_height = this.domElem[0].offsetHeight;
				this.sticky_top = this.domElem[0].offsetTop != 0 ? this.domElem[0].offsetTop : this.elem('backing').offset().top;

				this.setMod('fixed', BEMDOM.win.scrollTop() >= this.sticky_top);	
				this.setMod(this.elem('panel'), 'shadow', BEMDOM.win.scrollTop() >= this.sticky_top);
				
				this._scrollWin();
				throttle(this._resizeWin(), 300);
				
				channels('onGoodsCard').on('click', function(e){
					_this._resizeBlock();
				});
		
				if(sticky_flag === undefined){
					sticky_flag = true;
					this._getIndent();
				}
            }
        }
	},
	_scrollWin: function() {
		
		this.bindToWin('scroll', function(e) {
			this.setMod('fixed', BEMDOM.win.scrollTop() >= this.sticky_top);
			this.setMod(this.elem('panel'), 'shadow', BEMDOM.win.scrollTop() >= this.sticky_top);
		});
	},

	_resizeWin: function() {
		this.bindToWin('resize', function(e) {
			this.sticky_top = this.domElem[0].offsetTop != 0 ? this.domElem[0].offsetTop : this.elem('backing').domElem[0].offsetTop;
			
			throttle(this._getIndent(), 300);
			
			this.setMod('fixed', BEMDOM.win.scrollTop() >= this.sticky_top);
			this.setMod(this.elem('panel'), 'shadow', BEMDOM.win.scrollTop() >= this.sticky_top);
		});
	},

	_resizeBlock: function(){
		this.sticky_top = this.domElem[0].offsetTop != 0 ? this.domElem[0].offsetTop : this.elem('backing').domElem[0].offsetTop;
			
		this.setMod('fixed', BEMDOM.win.scrollTop() >= this.sticky_top);
		this.setMod(this.elem('panel'), 'shadow', BEMDOM.win.scrollTop() >= this.sticky_top);		
	}, 

	_getIndent: function(){
		arr = this.findBlockOutside('page').findBlocksInside('sticky');
		// arr = BEMDOM.doc.find('.sticky');
		
		arr.reduce(function(indent, current, i){
			current.sticky_top = current.sticky_top - indent;

			current.elem('panel').css({'top': indent}); 
			// current.elem('panel').css({'top': indent, 'z-index': 10 - i }); 
			
			return indent + current.sticky_height;
		}, 0);
		
		
	}
}));

});