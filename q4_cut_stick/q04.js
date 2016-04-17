#!/usr/bin/env jsc


function cutBar(people, cm, currentBar){
	var count = 0;
	//棒の本数が全て1cmになったら処理終了
	if (cm <= currentBar){
		return count;
	//
	} else if (currentBar < people){
		count = 1 + cutBar(people, cm, currentBar * 2)
	} else {
		count = 1 + cutBar(people, cm, currentBar + people)
	}
	return count;
}

print (cutBar(3,8,1));
print (cutBar(3,20,1));
print (cutBar(5,100,1));
