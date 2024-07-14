// processes ugly query strings of numbers from req.query object. They look like this "1,2,3,4,5,6" and need to be arrays of valid numbers[1,2,3,4,5,6]. we need to split the string on the commas and map it into an array.
function queryStringtoNumbers(numString){
    const stringNumsArray=numString.split(",")
    console.log(stringNumsArray)
    const numsArray=stringNumsArray.map(function(idx){
        return parseInt(idx)
    })
    console.log(numsArray)
    return numsArray
}

// simple mean calculator! Takes array of nums as param/argument. Loops over array, adds all terms to the counter named total, then divides by length of the array. returns that calculation.

function doMean(numsArr){
    let total=0
    const length=numsArr.length
    for(let num of numsArr){
        total+=num
    }
    let mean=total/length
    console.log("here is the final mean---->", mean)
    return mean 
}

//Median Calculator! Takes array of nums as param/argument. Actually kinda tricky in a function because we have to identify array positions without knowing the number of terms beforehand and account for cases with an even amount of terms and cases with an odd number of terms.
// the array should also be sorted from least to greatest.
// median formula----> if numSamples or N is odd median would be the array index position of (N+1/2)-1 or the true middle position of the array.
// if numSamples or N is even we need to take the average of two middle terms in the array to get the median. To determine middle terms we take (numsSamples/2) - 1 for the low idx and numsSamples/2 for the higher one
// then just take average of the value of those two indices. 

function doMedian(numsArr){
    const sortedNumsArr=numsArr.sort(function(a, b) {
        return a - b;
    });
    console.log("here is sortedNumsArr---->", sortedNumsArr)
    const numSamples=sortedNumsArr.length
    console.log("here is numSamples---->", numSamples)
    if(numSamples%2===0){
        console.log("even number of terms detected")
        const medianIdxLow=sortedNumsArr[(numSamples / 2) - 1]
        const medianIdxHigh=sortedNumsArr[numSamples / 2]
        const median=(medianIdxLow+medianIdxHigh)/2
        console.log("here is the final median---->", median)
        return median

    }
    else{
        console.log("odd number of terms detected")
        const medianIdx=((numSamples+1)/2)-1
        const median=sortedNumsArr[medianIdx]
        console.log("here is the final median---->", median)
        return median
    }  
}

// scratch notes RE  doMedian
// 9 samples +1=10 [1,2,3,4,5,6,7,8,9,10]
// [1,2,3,4,5,6,7,8,9,10]
// [0,1,2,3,4,5,6,7,8,9]
// 10/2=5
// 5-1=idx4! idx4=5!

//mode helper function countOccurences. Counts how many times a value is present in an array.
function countOccurrences(arr, value) {
    return arr.filter(element => element === value).length;
  }

// Mode Calculator! loops over array, counts the number of occurences for each value. if the number of occurences exceeds our current counter then current value becomes the new mode!
// we do encounter two edge cases with mode! 
// 1. one is having one occurence of all the numbers in which case there would be no mode we account for that by checking the final number of occurences if it never exceeds 1 there cannot be a mode
// 2. if there are two numbers with the same amount of occurences then there could be 2 modes for example [1,2,2,1] mode would be both 1 and 2. Our function would only count the first one in this instance.
function doMode(numsArr){
    let occurences=1;
    let mode;
    for (let num of numsArr){
        if(countOccurrences(numsArr,num)>occurences){
            occurences=countOccurrences(numsArr,num)
            mode=num
        }
    
    }
    if (occurences===1){
        mode="there is no mode, all numbers are found once"
    }
    console.log("here is the final mode---->", mode)
    return mode
}

module.exports ={
    queryStringtoNumbers: queryStringtoNumbers,
    doMean:doMean,
    doMedian:doMedian,
    countOccurrences:countOccurrences,
    doMode:doMode
}