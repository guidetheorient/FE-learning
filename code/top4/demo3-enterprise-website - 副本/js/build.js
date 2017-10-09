requirejs.config({
    baseUrl:'./js',
    paths:{
        jquery:'lib/jquery-3.2.1.min'
    }
})

require(['jquery','Carousel','GoTop'],function ($,Carousel,GoTop) {
    Carousel.init($('.carousel'))
    new GoTop()
})