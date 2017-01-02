
//6. ZigZag Conversion
//这个程序是用类似数组矩阵的思想，使用字符串替换数组矩阵编写的
//之所以用字符串替换数组，是因为程序提示内存超出的限制。
//但其实，虽然这个方法可以使用，但其实是思路错了，应该讲样例写出来，用数学的方法分析，然后得出结果
var str = "ABCDE";
var rows = 4;
var convert = function(s, numRows) {
 	var strLength = s.length;
    var length = Math.ceil(strLength / numRows);
	var middle = parseInt(numRows / 2);
	var array = [];
	for(var i = 0 ; i < numRows ; i++){
		// array.push([]);
		array.push('');
	}
	var col   = 0;
	var k 	  = 0;
	var yushu = 0;
	var test  = numRows;
	var t     = 0;
	for(var j = 0 ; j < strLength ; j++){
		var temp = j % numRows; //取余数
		if(k <= numRows){       //k表示行数
			if( temp !== yushu){ //余数不等于指定余数
				// array[k].push(s[j]);	//向数组中存入数据
				array[k] = array[k] + s[j];
			}else{
				if(j >= test){   //向数组中填入数据
					t = t - 1;
					for( ; t > 0 ; t-- ){
						for(var m = 0 ; m < numRows ; m++){
							if(j >=	 strLength){
								break;
							}
							if(m !== t){
								// array[m].push('');
								array[m] = array[m] + ' ';
							}else{
								array[t] = array[t] + s[j];
							}
						}
						j++;
						yushu++;
					}
					j--; // 抵消最外层循环的j++
					if(numRows > 1){
						test = test + numRows + numRows -2;
					}else{
						test = test + numRows;
					}
					
					yushu = yushu % numRows;
					continue;
				}else{    //对 j == 0 做特殊处理
					array[k] = array[k] + s[j];
				}
			}
			if(k == numRows - 1){ //判断行是否遍历完毕
				k = 0;
				t = numRows - 1;
			}else{			//没遍历完，就移动到下一行
				k++;
			}
		}
		
	}
	var tempArray = [];
	for(var z = 0 ; z < array.length ; z++){  //输出数组中所有内容
		for(var b = 0 ; b < array[z].length ; b++){
			if(array[z][b] !== ' '){
				tempArray.push(array[z][b])
			}
		}
	}
	var result = tempArray.join('');
	console.log(result);
	console.log(array)
    return result;
};


convert(str,4);