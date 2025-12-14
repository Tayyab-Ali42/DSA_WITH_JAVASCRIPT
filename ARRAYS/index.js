// PROBLEM 1 Given an array of integers nums and an integer target,
//     you need to return the indices of two numbers from the array such that:

// nums[i] + nums[j] = target

// Conditions

// You must use two different elements(i ≠ j).
// You can return the answer in any order.
// There is exactly one valid answer for the test case.
// You cannot use the same index twice.

// TIME COMPLEXITY = 

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(i, j)
                return
            }
        }
    }
}


// twoSum([2, 1, 7, 15], 9)
// twoSum([1, 2], 3)
// twoSum([1, 3, 4, 2], 6)
// twoSum([3, 3], 6)
// twoSum([1, 1, 2, 3, 10], 11)




// PROBLEM 2 You are given an array prices, where:
// prices[i] = the price of a stock on day i.

// You want to buy the stock on one day and sell it on a later day.
// Your goal is to maximize your profit.

// Rules
// You can buy only once.
// You can sell only once.
// You must sell after you buy (no selling before buying).
// If no profit is possible, return 0.


function buyAndSell(prices) {
    let MaxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > MaxProfit) {
                MaxProfit = prices[j] - prices[i]
            }
        }
    }
    return MaxProfit
}


// console.log(buyAndSell([7, 1, 5, 3, 6, 4]))
// console.log(buyAndSell([7, 6, 4, 3, 1]))



// PROBLEM 3 Maximum Subarray — Problem Description

// You are given an integer array nums.

// Your task is to find the contiguous subarray(continuous part of the array)
// that has the largest possible sum, and return that sum.

// Key points:
// The subarray must be contiguous(no skipping elements).
// The array may contain negative numbers.
// The answer is just the maximum sum, not the subarray itself.


function maxSubArray(array) {
    let maxSum = array[0];
    for (let i = 0; i < array.length; i++) {
        let currentSum = 0;  // reset for each starting point
        for (let j = i; j < array.length; j++) {
            currentSum += array[j];   // extend subarray to the right
            if (currentSum > maxSum) {
                maxSum = currentSum;  // update maximum
            }
        }
    }

    return maxSum;
}

// console.log(maxSubArray([1, 2, -1, 3])); // 5



// PROBLEM 4 Remove Duplicates From Sorted Array — Problem Description

// You are given a sorted array(ascending order)

// Your task is to:
// ✅ Remove the extra duplicates IN - PLACE(inside the same array)
// ✅ Keep only one copy of each number
// ✅ And return how many unique elements the array now has


function removeDublicates(arr) {
    // New Optimized version
    if (!arr.length) return
    let writeIndex = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[writeIndex] = arr[i]
            writeIndex++
        }
    }
    return writeIndex

    // OLD BRUTRE FORCED VERSION
    // for (let i = 1; i < arr.length; i++) {
    // let j = i + 1
    // while (j < arr.length) {
    //     if (arr[j] === arr[i]) {
    //         arr.splice(j, 1)
    //     } else {
    //         j++
    //     }
    // }
    // }
    // return `There are ${arr.length} unique elements`

}

console.log(removeDublicates([1, 1, 2]))
console.log(removeDublicates([1, 1, 2, 2, 2, 3, 3, 4, 5]))


