#!/usr/bin/env jsc

var _ = require('./lib/node_modules/underscore/underscore');
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num;  }, 0);
//print (sum);
console.log(sum);
