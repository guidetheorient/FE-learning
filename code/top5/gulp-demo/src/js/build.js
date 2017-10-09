requirejs.config({
    baseUrl:'./src/js',
    paths:{
        jquery:'lib/jquery-3.2.1.min'
    }
})

require(['jquery','Carousel','GoTop','Waterfall','ScrollChangeColor'],function ($,Carousel,GoTop,Waterfall,ScrollChangeColor) {
    Carousel.init($('.carousel'))
    new GoTop()
    Waterfall.init($('.waterfall-wrap'))
    new ScrollChangeColor()
})