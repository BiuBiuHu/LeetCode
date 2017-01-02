//6. ZigZag Conversion
//采用分析题目结构，结合数学思想的方法，实现一种算法解决了这个问题
var str = "ABCDE";
var convert = function(s, numRows) {
	var step  = numRows + numRows -2;
	var array = [];
	var length = s.length;
	var times = Math.ceil(length / step);
	var resultArray = [];
	if(numRows === 1){
		return s;
	}
	for(var i = 0 ; i < numRows ; i++){  //行数
		for(var k = 0 ; k < times ; k++){  //列
			if(i == 0 || i == numRows -1){
				resultArray.push(s[k*step + i]);
			}
			if(i > 0 && i < numRows -1){
				if(s[k*step + i]){  //第一列
					resultArray.push(s[k*step + i]);
				}
				if(s[k*step + numRows + ( numRows -2 ) - i]){ //第二列
					resultArray.push(s[k*step + numRows + ( numRows -2 ) - i]);
				}
			}
		}
	}	
	console.log(resultArray.join(''))
    return resultArray.join('');
};


convert(str,1);