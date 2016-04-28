angular.module('My-Module')

.controller('MyController',function(MyService,MyFactory){
    var mc = this;
    mc.test = "test";
    mc.data = [];
    mc.dataOld = [];
    mc.gotData = MyService.getData();
    mc.factData = MyFactory.getData();
    mc.filteredFact = []
    mc.num = 0;
    
    mc.addNew = function(n){
        MyService.addNew(n)
        mc.gotData = MyService.getData();
        mc.data = []
        sortIt(mc.gotData)
    }
    
    function sortIt(){
        mc.gotData.forEach(function(p){
             p.age < 40 ? mc.data.push(p):mc.dataOld.push(p)

        })
    }
     function sortItFact(){
        mc.factData.forEach(function(p){
             p.age > 40 ? mc.filteredFact.push(p): mc.num++;

        })
    }
    sortIt(mc.gotData)
    sortItFact(mc.factData);
})