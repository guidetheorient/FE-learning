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
            window.localStorage.setItem('myTodos',session)
            
            let newTodoSession = JSON.stringify(this.newTodo)
            localStorage.setItem('myNewTodo',newTodoSession)
        }
        
        let previousData = JSON.parse(window.localStorage.getItem('myTodos'))
        this.todoList = previousData || []
        // if(Array.isArray(previousData)){
        //     this.todoList = previousData;
        // }else{
        //     this.todoList = [];
        // }

        let previousNewTodo = JSON.parse(localStorage.getItem('myNewTodo'))
        //console.log(typeof previousNewTodo)
        this.newTodo = previousNewTodo || ''
        //不加||''，第一次挂了，提示this.todoList.push和splice is not a func
    }
})
