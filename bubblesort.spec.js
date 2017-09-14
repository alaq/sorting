

describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'bubbleSort').and.callThrough();
  });
  it('number of times function is run', function () {
    bubbleSort([3,1,2]);
    expect(bubbleSort.calls.count()).toEqual(1);
  });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an single item in array', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
      });
      it('handles an multiple items in array', function(){
        expect( bubbleSort([3,1,2]) ).toEqual( [1,2,3] );
      });
  });