// Split The Bill
// It's tricky keeping track of who is owed what when spending money in a group.
// Write a function to balance the books.

// The function should take one parameter: an object/dict with two or more name-value
// pairs which represent the members of the group and the amount spent by each.

// The function should return an object/dict with the same names, showing how much
// money the members should pay or receive.

// Further points:

// The values should be positive numbers if the person should receive money from the
// group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.



// Example

// 3 friends go out together: A spends £20, B spends £15, and C spends £10.
// The function should return an object/dict showing that A should receive £5,
// B should receive £0, and C should pay £5.

function splitTheBill(obj) {
    var total = 0;
    for(var key in obj) {
        total += obj[key];
    }
    var avg = total / Object.keys(obj).length;
    for(key in obj) {
        var temp = 0;
        temp = obj[key] - avg;
        // Round to at most 2 decimal places
        obj[key] = Math.round(temp * 100) / 100;
    }
    return obj;
}
var group = {
    A: 20,
    B: 15,
    C: 10
};
// for(var key in group) {
//     console.log(key + ":" + group[key]);
// }

splitTheBill(group); // returns {A: 5, B: 0, C: -5}
