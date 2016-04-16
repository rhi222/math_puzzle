#!/usr/bin/env jsc
//文字列を逆に返すメソッドを実装する
String.prototype.reverse = function() {
	return this.split("").reverse().join("");
}

//10以上の数　かつ　奇数を探せば良い
var num = 11;
while (true){
	if ((num.toString() == num.toString().reverse()) &&
		(num.toString(8) == num.toString(8).reverse()) &&
		(num.toString(2) == num.toString(2).reverse())) {
		//console.logは端末上で使えない
		//console.log(num);
		print(num);
		break;
	}
	//偶数は探す必要がない
	num += 2;
}
