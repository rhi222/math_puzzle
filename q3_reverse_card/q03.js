#!/usr/bin/env jsc
//カードの枚数初期化する
var N = 100;
var cards = [];
for (i=1; i <= N ; i++) {
	cards.push(false);
}

// N回、カードを裏返す
for (i=2; i <= N ; i++) {
	var j = i -1;
	while(j < cards.length){
		cards[j] = !cards[j];
		j += i;
	}
}

// 結果を出力
print(cards);
print (getAllIndex(cards, false));
var reverseCardNumbers = getAllIndex(cards, false).map(function(index){
	return index + 1;
});
print(reverseCardNumbers);
function getAllIndex(arr, val){
	var index = [];
	var i;
	for(i = 0; i < arr.length; i++){
		if(arr[i] === val){
				index.push(i);
		}
	}
	return index;
}

