var _ = require('../lib/node_modules/underscore/underscore.js')
//name space
var q5 ={
/*
var coins = [10, 50, 100, 500];
var maxCoinNum = 15;
var totalPrice = 1000;
*/
	countExchangeCombination : function (totalPrice, coins, maxCoinNum) {
		console.log('first');
		var combination;
		coins.sort(function(a, b){ return (b - a);});
		coins = _.rest(coins, 1);
		console.log(coins);
		if(coins.length === 0){
			console.log('in if');
			combination = this.combination;
			combination = 222;
			console.log(combination);
			//console.log('return ');
			//return combination;
		} else{
			console.log('else ');
			combination = q5.countExchangeCombination(totalPrice, coins, maxCoinNum);
			console.log('else combination');
			console.log(combination);
		console.log('else last');
		}
		console.log('return ');
		return combination;
	}

	,sumArray : function(arr) {
		var sum = 0;
		arr.forEach(function(elm) {
			sum += elm;
		});
		return sum;
	}
//var answer = countExchangeCombination (1000, [10, 50, 100, 500], 15);
};

module.exports = q5;
//console.log(module);
//console.log(module.exports);
