export const updateElementFromArray = (array: any[], item: any, findIndex: (item: any) => boolean) => {
  const index = array.findIndex(findIndex);
  return index >= 0 ?
    [
      ...array.slice(0, index),
      item,
      ...array.slice(index + 1),
    ] :
    array;
};
