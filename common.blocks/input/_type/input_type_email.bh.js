module.exports = function(bh) {
    bh.match('input_type_email', function(ctx) {
        ctx.attr('type', 'email');
    });
};
