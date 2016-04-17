#!/usr/bin/env jsc


function cutBar(people, initialCm, currentBarNum){
	var count = 0;
	//棒の本数が全て1initialCmになったら処理終了
	if (initialCm <= currentBarNum){
		return count;
	//
	} else if (currentBarNum < people){
		count = 1 + cutBar(people, initialCm, currentBarNum * 2)
	} else {
		count = 1 + cutBar(people, initialCm, currentBarNum + people)
	}
	return count;
}

print (cutBar(3,8,1));
print (cutBar(3,20,1));
print (cutBar(5,100,1));
