module.exports = function(bh) {
    bh.match('input_type_geo', function(ctx) {
        ctx.attr('type', 'text');
    });
};
