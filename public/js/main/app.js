var app = angular.module("app.todos",["xeditable"]);

app.controller("todoController", ['$scope','svTodos',function($scope, svTodos){

    $scope.appName = "Todos Datalist!!!";
    $scope.formData = {};
    $scope.loading = true;
    $scope.todos = [
        // fixed goi toi datat services

        // {
        //     text: "Khoi tao du an, thu vien bootstrap, fontawesome, angularjs,..",
        //     isDone: true
        // },
        // {
        //     text: "Cai dat AngularJS app, controller, khoi tao du lieu ban dau",
        //     isDone: true
        // },
        // {
        //     text: "Tao services goi api, binding du lieu, action,...",
        //     isDone: false
        // },
        // {
        //     text: "Hoan thanh ung dung, deploy len heroku...",
        //     isDone: false
        // }
    ];

    // load data from api

    svTodos.get().success(function(data){
        $scope.todos = data;
        $scope.loading = false;
    })

    $scope.createTodo = function(){
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        // push  vao server

        // $scope.todos.push(todo);
        // // console.log("create",todo)
        // $scope.formData.text =null;

        svTodos.create(todo).success(function(data){
            $scope.todos = data; //$scope.todos.push(data) van day vao data duoc, nhung ko get() ra man hinh ngay
            $scope.formData.text = null;
            $scope.loading = false;
        })

    };

    $scope.updateTodo = function(todo){
        console.log("update: ", todo);
        $scope.loading = true;

        svTodos.update(todo).success(function(data){
            $scope.todos = data;
            $scope.loading = false;
        })
    }

    $scope.deleteTodo = function(todo){
        console.log("Delete: ", todo)
        $scope.loading = true;

        svTodos.delete(todo._id).success(function(data) {
            $scope.todos = data;
            $scope.loading = false;
        })
    }
}])