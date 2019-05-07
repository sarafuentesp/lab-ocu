import { updateElementFromArray } from './array';

describe('common/helpers/array specs', () => {
  describe('updateElementFromArray', () => {
    it('should return the original array if the item is not found', () => {
      // Arrange
      const array = [3, 5];
      const itemToFind = 44;
      const updatedItem = 43;

      // Act
      const result = updateElementFromArray(
        array,
        updatedItem,
        item => item === itemToFind
      );

      // Assert
      expect(result).toEqual(array);
    });

    it('should return a new number array without the first occurrence of the searched number', () => {
      // Arrange
      const array = [3, 5, 3, 5];
      const itemToFind = 5;
      const updatedItem = 43;
      const expectedArray = [3, 43, 3, 5];

      // Act
      const result = updateElementFromArray(
        array,
        updatedItem,
        item => item === itemToFind
      );

      // Assert
      expect(result).toEqual(expectedArray);
    });

    it('should return the original string array if the item is not found', () => {
      // Arrange
      const array = ['a', 'b'];
      const itemToFind = 'c';
      const updatedItem = 'd';

      // Act
      const result = updateElementFromArray(
        array,
        updatedItem,
        item => item === itemToFind
      );

      // Assert
      expect(result).toEqual(array);
    });

    it('should return a new string array without the first occurrence of the searched string', () => {
      // Arrange
      const array = ['a', 'b', 'a', 'b'];
      const itemToFind = 'b';
      const updatedItem = 'd';
      const expectedArray = ['a', 'd', 'a', 'b'];

      // Act
      const result = updateElementFromArray(
        array,
        updatedItem,
        item => item === itemToFind
      );

      // Assert
      expect(result).toEqual(expectedArray);
    });

    it('should return the original object array if the item is not found', () => {
      // Arrange
      const array = [{ id: 1 }, { id: 2 }];
      const itemToFind = { id: 3 };
      const updatedItem = { id: 4 };

      // Act
      const result = updateElementFromArray(
        array,
        updatedItem,
        item => item.id === itemToFind.id
      );

      // Assert
      expect(result).toEqual(array);
    });

    it('should return a new object array without the first occurrence of the searched object', () => {
      // Arrange
      const array = [{ id: 1 }, { id: 2 }];
      const itemToFind = { id: 1 };
      const updatedItem = { id: 4 };
      const expectedArray = [{ id: 4 }, { id: 2 }];

      // Act
      const result = updateElementFromArray(
        array,
        updatedItem,
        item => item.id === itemToFind.id
      );

      // Assert
      expect(result).toEqual(expectedArray);
    });
  });
});
