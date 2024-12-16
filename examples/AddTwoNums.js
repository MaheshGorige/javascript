var addTwoNumbers = function(l1, l2) {
    let l1Total = l1.reverse().toString().replaceAll(",", "")
    let l2Total = l2.reverse().toString().replaceAll(",", "")

    const total = Number(l1Total) + Number(l2Total)

    let results = total.toString().split("")

    return results.reverse().map(v => Number(v));
};

addTwoNumbers([2,4,3], [5,6,4])


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.