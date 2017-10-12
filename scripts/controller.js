(function(){
    angular
    .module('fizzBuzz')
    .controller('FizzBuzzController', fizzBuzzCtrl);

    function fizzBuzzCtrl(){
        var vm = this;
        vm.numbers = [];

        for(var i = 1; i <= 100; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                vm.numbers.push('FIZZBUZZ');
            } else if (i % 3 === 0) {
                vm.numbers.push('FIZZ');
            } else if (i % 5 === 0) {
                vm.numbers.push('BUZZ');
            } else {
                vm.numbers.push(i);
            }  
        }
    }
})();