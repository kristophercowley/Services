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
    
    var moreData = [
        1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,23,1,2,1,3,1,3,45,67,87,,4,22
    ]
        function getData (){
            return data;
        }
        
        function setData (newData){
            data.push(newData)
        }
        function getMoreData(){
            return moreData
        }
       
        return {
            getData: getData,
            setData: setData,
            getMoreData: getMoreData
        }
        
}])