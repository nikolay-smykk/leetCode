var maxSubArray = function(nums) {
    
    let prev = 0;
    let max = -Infinity;

  for (var i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
    
};