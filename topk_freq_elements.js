/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let mp = new Map();
    for(let n of nums){
        mp.set(n, (mp.get(n)||0)+1 );
    }
    const arr =  [...mp.entries()]   // converting the map to 2d array
    arr.sort((a,b)=> b[1]-a[1]) 
    const newarr = arr.slice(0, k);
    return newarr.map(n =>n[0]);

    
};