requirejs.config({
    baseUrl:'.',
    paths:{
        jquery:'lib/jquery-3.2.1.min'
    }
})

require(['GoTop'],function (GoTop) {
 new GoTop()
})