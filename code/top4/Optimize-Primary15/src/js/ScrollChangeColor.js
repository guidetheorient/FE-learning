define(['jquery'],function ($) {
    function ScrollChangeColor() {
        this.bind()
    }
    ScrollChangeColor.prototype.bind = function () {
        $(document).on('scroll',function () {
            if($(document).scrollTop() != 0){
                $('#header').css({'background':'rgb(21,21,21)'})
            } else {
                $('#header').css({'background':'rgba(21,21,21,0)'})
            }
        })
    }

    return ScrollChangeColor
})