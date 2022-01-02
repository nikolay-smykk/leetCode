var mergeTwoLists = function(list1, list2) {
    return ([...list1, ...list2].sort())
};


console.log(mergeTwoLists([1,2,4],[1,3,4]))
// [1,1,2,3,4,4]
