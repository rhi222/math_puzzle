describe('q06 test', function(){
	var q6 = require('../q6_korasso/q06.js');
	it('init process', function(){
		expect(q6.init(10)).toEqual(31);
	})
});
