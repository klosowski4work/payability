import { flatten } from "lodash";

/**
 * Merge arrays alternately
 * @param arrays - arrays to merge alternately
 */
export const alternateMerge = (...arrays) => {
  let minArrayLength = Math.min(...arrays.map(array => array.length));
  const alternateArray = [];
  while (minArrayLength-- > 0) {
    for (let array of arrays) {
      alternateArray.push(array.shift());
    }
  }
  return flatten([alternateArray, ...arrays]);
};

/**
 * Return sorting function by propertys
 * @return sort function
 */
export const createSorterByPropertys = (propertys: string[]) => {
  return (a: any, b: any): number =>
    propertys
      .map(property => {
        let dir = 1;
        if (property[0] === "-") {
          dir = -1;
          property = property.substring(1);
        }
        return a[property] > b[property]
          ? dir
          : a[property] < b[property]
          ? -dir
          : 0;
      })
      .reduce((previous, current) => (previous ? previous : current), 0);
};
