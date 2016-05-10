block('popup')(
	match(function(){ return this._selectMods && this._selectMods.tail === true })(
		content()(function(){

			return [
				{
					elem: 'tail',
					tag: 'i'
				},
				applyNext(),
			]
		})
	),
	
	match(function(){ return this._popupDirections })(function(){		
		return applyNext({ 'ctx.directions': this._popupDirections });
	})
);