var strStr = function(haystack, needle) {
    if(!haystack && !needle) return ""
    if(!haystack) return -1
    return haystack.indexOf(needle)
};

console.log(strStr("hello","ll"));