// 9. Palindrome Number

var isPalindrome = function(x) {

// return Number(x.toString().split("").reverse().join(""))

    if(x == Number(x.toString().split("").reverse().join(""))) {
        return true
    }
    return false



};


console.log(isPalindrome(121))