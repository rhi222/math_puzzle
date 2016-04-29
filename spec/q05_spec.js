describe("q05 test", function() {
	var q5 = require('../q5_cach_payment/q05.js');

	beforeEach(function(){
	});

	it("func sumArray", function(){
		expect(q5.sumArray([2,3,4])).toEqual(9);
	});

	it("func getKsizedCombination", function(){
		expect(q5.k_combinations([10, 50, 100], 2)).toEqual([[10, 50], [10, 100], [50, 100]]);
	});

	it("func countExchangeCombination", function(){
		expect(q5.countExchangeCombination(500, [10, 50, 100], 5)).toEqual(9);
	});
});

