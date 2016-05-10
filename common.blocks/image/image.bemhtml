block('image')(
	mod('lazy', true)(
		attrs()(function(){
			var ctx = this.ctx;

            return this.extend(applyNext(),
                {
                    role: undefined,
					src: undefined,
                    width: ctx.width,
                    height: ctx.height,
                    alt: ctx.alt,
                    title: ctx.title
				});
		}),
		
		js()(function(){
			return applyNext(),{
				'src': this.ctx.url
			}
		})
	)
)