
  const{queryStringtoNumbers, doMean, doMedian, countOccurrences, doMode}=require("./helpers");
  
  describe("#doMedian", function(){
    it("finds the median of an even set", function(){ 
      expect(doMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("finds the median of an odd set", function () { 
      expect(doMedian([1, -1, 4])).toEqual(1)
    })
  })
  
  describe("#doMean", function () {
    it("finds the mean of an empty array", function () { 
      expect(doMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function () { 
      expect(doMean([1,-1,4,2])).toEqual(1.5)
    })
  })
  
  describe("#doMode", function () {
    it("finds the mode", function () { 
      expect(doMode([1,1,1,2,2,3])).toEqual(1)
    })
  })