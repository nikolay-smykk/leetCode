// 58. Length of Last Word


var lengthOfLastWord = function(s) {
	const res = s.trim().split(" ")
	return res[res.length -1].length

};

console.log(lengthOfLastWord("   fly me   to   the moon  "))