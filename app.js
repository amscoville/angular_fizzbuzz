(function(){
    var app = angular.module('fizzBuzz', ['controller']);

    app.controller('fizzBuzz', function(){
        this.numbers = function (){
            const arr = [];
            for(let i = 1; i < 101; i++) {
                if(i % 3 === 0 && i % 5 === 0) {
                    arr.push('FIZZBUZZ');
                } else if (i % 3 === 0) {
                    arr.push('FIZZ');
                } else if (i % 5 === 0) {
                    arr.push('BUZZ');
                } else {
                    arr.push(i);
                }  
            }
            return arr;
        }; 
    });
})();

