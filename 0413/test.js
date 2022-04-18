const GIVEN_ARRAY = [[4, 2, 3], [4, [3, 4, [5, 3]], 5], [4, 3, 5]];
const RESULT_ARRAY = [4, 2, 3, 4, 3, 4, 5, 3, 5, 4, 3, 5];


const GIVEN_ARRAY2 = [[5, [3, [5, [6, [5, 4]]]], 3, [6, 246]]];
const RESULT_ARRAY2 = [5, 3, 5, 6, 5, 4, 3, 6, 246];

const flat = (arr) => {
  return arr.reduce((result, curr) => {
      if(typeof arr !== 'object'){
          return result.concat(...curr);
      }
      return result.concat(flat(...curr));
  },[]);
};