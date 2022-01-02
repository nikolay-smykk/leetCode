
// 1. Two Sum

// var twoSum = function(nums, target) {
// 	const res = []
//     for(let i=0; i< nums.length-1;i++){
// 		for(let j=i + 1; j<nums.length; j++){
// 			if(nums[i] + nums[j] === target){
// 				res.push(i,j)
// 				return res
// 			}
			
// 		}
        
//     }
// 	return res
// };


const twoSum =(nums,target) =>{
	const previousValue = {}
	for(let i=0; i< nums.length; i++){

		const comp = target - nums[i]
		

		if(previousValue[comp]){
			return [comp, nums[i]]
		}
		previousValue[nums[i]] = true
	}
	
}

console.log(twoSum([2,7,11,15],9))


//[0, 1]