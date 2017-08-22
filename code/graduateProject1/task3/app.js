import Vue from 'vue';

var app = new Vue({
    el:'#app',
    data:{
        newTodo:'',
        todoList:[]
    },
    methods:{
        addTodo:function () {
            this.todoList.push({
                title:this.newTodo,
                createdTime:new Date(),
                done:false
            })
            // console.log(this.todoList)
            this.newTodo = ''
        },
        removeTodo:function (item) {
            let index = this.todoList.indexOf(item)
            this.todoList.splice(index,1)
        }
    },
    created:function () {
        window.onbeforeunload = ()=>{
            let session = JSON.stringify(this.todoList)
            localStorage.setItem('myTodos',session)
        }
        let previousData = JSON.parse(localStorage.getItem('myTodos'))
        this.todoList = previousData || []
    }
})
