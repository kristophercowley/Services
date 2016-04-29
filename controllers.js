angular.module('My-Module')

    .controller('CLController', function () {
        var cl = this;
        cl.test = "Cl Controller working?";
        cl.history = [];
        var index = 0;

        cl.saveToHistory = function (cmd) {
            cl.history.unshift(cmd);
            console.log(cl.history);
            cl.command = "";
        }

        cl.traverseCommands = function (e) {
            // console.log(e)
            if (e.keyCode == '38') {
                console.log('up'); 
              if(cl.history && index < cl.history.length){
                    index++;
                    cl.command = cl.history[index];
                }else if(!cl.history){
                    cl.command = '';
                }
            } else if (e.keyCode == '40') {
                console.log('down');
                if(index > -1){
                    index--;
                    cl.command = cl.history[index];
                }

                // keyPress = -1;
            } else if (e.keyCode == '13') {
                cl.saveToHistory(cl.command);
                cl.command = "";
            }
        }
        // Handles click events
        // document.onkeydown = checkKey;

        // function checkKey(e) {

        //     e = e || window.event;

        //     if (e.keyCode == '38') {
        //         // up arrow
        //         console.log('up');
        //     }
        //     else if (e.keyCode == '40') {
        //         // down arrow
        //         console.log('down');

        //     }
        //     else if (e.keyCode == '37') {
        //         // left arrow
        //         console.log('left');

        //     }
        //     else if (e.keyCode == '39') {
        //         // right arrow
        //         console.log('right');

        //     }
        //     else if (e.keyCode == '13') {
        //         // enter key
        //         console.log('enter');
        //         cl.enter();

        //     }

        // }

    })







    .controller('MyController', function (MyService, MyFactory) {
        var mc = this;
        mc.test = "test";
        mc.data = [];
        mc.dataOld = [];
        mc.gotData = MyService.getData();
        mc.factData = MyFactory.getData();
        mc.filteredFact = []
        mc.num = 0;
        mc.more = MyFactory.getMoreData();




        mc.addNew = function (n) {
            MyService.addNew(n)
            mc.gotData = MyService.getData();
            mc.data = []
            sortIt(mc.gotData)
        }

        function sortIt() {
            mc.gotData.forEach(function (p) {
                p.age < 40 ? mc.data.push(p) : mc.dataOld.push(p)

            })
        }
        function sortItFact() {
            mc.factData.forEach(function (p) {
                p.age > 40 ? mc.filteredFact.push(p) : mc.num++;

            })
        }
        sortIt(mc.gotData)
        sortItFact(mc.factData);
    })