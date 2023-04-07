export default function test() {
    $(window).ready(function() {
        $('.js-example-basic-single').select2();
    });
    $('.select2-arrow').append('<i class="fa fa-angle-down"></i>')
}
