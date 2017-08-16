var people = {
    name:'haha',
    sayName: function(){
        console.log(this.name)
    }
}

var name = 'aa'
function printName(){
    console.log(name)
}

module.exports = {
    people,
    printName:printName
}


define(['dependency'],function () {
    var name = 'Mike'
    function printName() {
        console.log(name)
    }

    return{
        printName:printName
    }
})

require(['myModuleName'],function(my){
    my.printName()
})