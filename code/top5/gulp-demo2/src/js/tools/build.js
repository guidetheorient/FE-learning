({
    baseUrl:'../',  //与data-main中baseUrl指向同一文件夹，这里的起点是当前文件夹，而data-main里起点是html文件所在文件夹
    paths:{   //baseUrl一致了，那paths也不需要修改了
        jquery:'lib/jquery-3.2.1.min'
    },
    name:'build',  //入口文件
    out:'../../../dist/merge.js' //输出文件
})