describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([1,2]).length).toEqual(2);
    });
});

describe('Merge', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
        expect(merge([1,4],[2,6])).toEqual([1,2,4,6]);
    });
  });

  describe('Merge Sort', function(){
    it('kjshkjdfhkj', function(){
        // test the merging algorithm
        expect(mergeSort([4,3])).toEqual([3,4]);
        expect(mergeSort([4,3,2,1,6,5,8,7,10,9,11])).toEqual([1,2,3,4,5,6,7,8,9,10,11]);
    });
  });