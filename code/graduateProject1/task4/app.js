import Vue from 'vue';

//leanCloud初始化
import AV from 'leancloud-storage'
var APP_ID = 'jtAW3G77T4uOHeCaa7HLOK9C-gzGzoHsz';
var APP_KEY = 'BkRDjA3CLrKzAxmy4khFIovK';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var app = new Vue({
    el:'#app',
    data:{
        newTodo:'',
        todoList:[],
        actionType:'login',
        formData:{
            username:'',
            password:''
        },
        currentUser:null,
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
        },
        signUp:function () {
            // 新建 AVUser 对象实例
            var user = new AV.User();
            // 设置用户名
            user.setUsername(this.formData.username);
            // 设置密码
            user.setPassword(this.formData.password);
            // 设置邮箱
            //user.setEmail('tom@leancloud.cn');
            user.signUp().then((loginedUser) => {
               this.currentUser = this.getCurrentUser()
            }, function (error) {
              console.log('注册失败')
            });
        },
        login:function(){
            //箭头函数
            AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser)=> {
                this.currentUser = this.getCurrentUser()
            }, function (error) {
                console.log('登录失败')
            });
        },
        getCurrentUser:function () {
            // console.log(AV.User.current())
            let current = AV.User.current()
            if(current){
                let {id,createdAt,attributes:{username}} = AV.User.current()
                return {id,username,createdAt}
            } else {
                return null
            }
        },
        logout:function () {
            AV.User.logOut()
            this.currentUser = null
            window.location.reload()
        }
    },
    created:function () {
        window.onbeforeunload = ()=>{
            let session = JSON.stringify(this.todoList)
            localStorage.setItem('myTodos',session)
            
            let newTodoSession = JSON.stringify(this.newTodo)
            localStorage.setItem('myNewTodo',newTodoSession)
        }
        
        let previousData = JSON.parse(localStorage.getItem('myTodos'))
        this.todoList = previousData || []
        // if(Array.isArray(previousData)){
        //     this.todoList = previousData;
        // }else{
        //     this.todoList = [];
        // }

        let previousNewTodo = JSON.parse(localStorage.getItem('myNewTodo'))
        //console.log(typeof previousNewTodo)
        //不加||''，第一次挂了，提示this.todoList.push和splice is not a func
        this.newTodo = previousNewTodo || ''
        
        this.currentUser = this.getCurrentUser()
    }
})
