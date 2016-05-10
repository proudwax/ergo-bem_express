module.exports = function(bh) {
    bh.match('input_type_tel', function(ctx) {
        ctx.attr('type', 'tel');
    });
};
