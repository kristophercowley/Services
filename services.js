angular.module('My-Module')

.service('MyService',[function(){
    var data = [
        {
            name:"Buzz",
            age:30
        },
         {
            name:"Bob",
            age:302
        },
         {
            name:"Dude",
            age:10
        },
         {
            name:"Lie",
            age:20
        },
         {
            name:"Rob",
            age:3000
        },
         {
            name:"Iife",
            age:45
        },
         {
            name:"asdfz",
            age:1234565432
        }
        
    ]
        this.getData = function(){
            return data;
        }
        
        this.setData = function(newData){
            data.push(newData)
        }
        
        this.addNew = function(n){
            data.push(n)
            console.log(data)
        }
}])

.factory('MyFactory',[function(){
     var data = [
        {
            name:"Buzz",
            age:30
        },
         {
            name:"Bob",
            age:302
        },
         {
            name:"Dude",
            age:10
        },
         {
            name:"Lie",
            age:20
        },
         {
            name:"Rob",
            age:3000
        },
         {
            name:"Iife",
            age:45
        },
         {
            name:"asdfz",
            age:1234565432
        }
        
    ]
    
        function getData (){
            return data;
        }
        
        function setData (newData){
            data.push(newData)
        }
        
        return {
            getData: getData,
            setData: setData
        }
        
}])