var _ = require('../lib/node_modules/underscore/underscore.js')
//name space
var q5 ={
/*
var coins = [10, 50, 100, 500];
var maxCoinNum = 15;
var totalPrice = 1000;
*/
	countExchangeCombination : function (totalPrice, coins, maxCoinNum) {
		var count;
		for(var i = 1; i < maxCoinNum; i++){
			var combArr = q5.combinations(coins);
			combArr.forEach(function(arr){
				console.log(arr);
				console.log(q5.sumArray(arr));
				console.log(totalPrice);
				if (q5.sumArray(arr) == totalPrice) {
					console.log('count +1');
					count += 1;
				}
			});
		}
		return count;
	}

	,sumArray : function(arr) {
		var sum = 0;
		if(Array.isArray(arr)){
		arr.forEach(function(elm) {
			sum += elm;
		});
		}
		return sum;
	}

	,k_combinations : function(set, k) {
	var i, j, combs, head, tailcombs;
	
	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	if (k > set.length || k <= 0) {
		return [];
	}
	
	// K-sized set has only one K-sized subset.
	if (k == set.length) {
		return [set];
	}
	
	// There is N 1-sized subsets in a N-sized set.
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements
		tailcombs = q5.k_combinations(set.slice(i + 1), k - 1);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
	}

		
	,combinations : function(set) {
	var k, i, combs, k_combs;
	combs = [];
	
	// Calculate all non-empty k-combinations
	for (k = 1; k <= set.length; k++) {
		k_combs = q5.k_combinations(set, k);
		for (i = 0; i < k_combs.length; i++) {
			combs.push(k_combs[i]);
		}
	}
	return combs;
	}
//var answer = countExchangeCombination (1000, [10, 50, 100, 500], 15);
};

//var answer = q5.countExchangeCombination (1000, [10, 50, 100, 500], 15);
var answer = q5.countExchangeCombination (300, [10, 50, 100], 5);
console.log('answer:');
console.log(answer);
module.exports = q5;
//console.log(module);
//console.log(module.exports);
