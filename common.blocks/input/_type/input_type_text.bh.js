module.exports = function(bh) {
    bh.match('input_type_text', function(ctx) {
        ctx.attr('type', 'text');
    });
};
