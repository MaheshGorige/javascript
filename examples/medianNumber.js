
var findMedianSortedArrays = function(nums1, nums2) {
    var arry = [...nums1, ...nums2].sort((a, b) => a - b)
    var start = Math.ceil(arry.length/2) - 1
    console.log(start)
    if(arry.length % 2 === 0){
        var newArray = arry.slice(start, start + 2)
        console.log(newArray)
        var total = newArray.reduce((t, v) => t + v, 0)
        return total / 2 
    }


    return arry.slice(start, start + 1)[0]
};

findMedianSortedArrays([1, 2], [3, 4])

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
