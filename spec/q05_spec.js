describe("sumArray", function() {
	var CashPayment = require('../q5_cach_payment/q05.js');
	var cashPayment;
	/*
	 * var sumArray = function(arr) {
		var sum = 0;
		arr.forEach(function(elm) {
			sum += elm;
		});
		return sum;
	};
	*/
	console.log('CashPayment:');
	console.log(CashPayment);
	console.log(CashPayment.sumArray);
	beforeEach(function(){
		//cashPayment = new CashPayment();
	});

	it("func sumArray return", function(){
		expect(CashPayment.sumArray([2,3,4])).toEqual(9);
	});
});

