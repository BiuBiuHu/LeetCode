/**
 * Created by BiuBiu_Jiao on 2016/9/29.
 */
var twoSum = function(nums, target) {
    for(var i = 0, max = nums.length ; i < max; i++){
        for(var j = i+1; j < max ; j++ ){
            var result = nums[i] + nums[j];
            if(result == target){
                var array = [];
                array.push(i);
                array.push(j);
                return array;
            }
        }
    }
};