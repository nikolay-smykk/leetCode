// var removeDuplicates = function(nums) {
// 		return [...new Set(nums)]
//   };

var removeDuplicates = function(nums) {
	let count = 0;
	let last = NaN;
	const res = []

	for(let i =0; i< nums.length; i++) {
		if(nums[i] !== last){
			nums[count] = nums[i]
			last = nums[i]
			count++;
			res.push(nums[i])
		}
	}

	return count

};

  console.log(removeDuplicates([1,1,2]))


