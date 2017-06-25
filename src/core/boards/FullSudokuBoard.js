
import Board from './Board';

export default class FullSudokuBoard extends Board {
   setCell(row, column, value) {
      const validNumbers = this.getAllValidNumbersForCell(row, column);

      if (validNumbers.has(value) || !value)
         super.setCell(row, column, value);
      else
         throw new Error(`It is not possible to set ${value} in position (${row}, ${column}).`)
   }

   getAllValidNumbersForCell(row, column) {      
      const numbersForRow = this.getAllValidNumbersInRowForCell(row, column);
      const numbersForColumn = this.getAllValidNumbersInColumnForCell(row, column);
      const numbersForGroup = this.getAllValidNumbersInGroupForCell(row, column);

      // console.log("numbersForRow", numbersForRow);
      // console.log("numbersForColumn", numbersForColumn);
      // console.log("numbersForGroup", numbersForGroup);

      const intersectionOfNumbersForRowAndColumn = 
         new Set([...numbersForRow].filter(x => numbersForColumn.has(x)));
      
      return new Set([...intersectionOfNumbersForRowAndColumn].filter(x => numbersForGroup.has(x)));
   }

   getAllValidNumbersInRowForCell(cellRow, cellColumn) {
      let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

      for (let column = 1; column <= this.getBoardSize(); column++) {
         if (column === cellColumn)
            continue;
         
         const numberToExclude = this.getCell(cellRow, column);

         if (numberToExclude)
            numbers.delete(numberToExclude);
      }

      return numbers;
   }

   getAllValidNumbersInColumnForCell(cellRow, cellColumn) {
      let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

      for (let row = 1; row <= this.getBoardSize(); row++) {
         if (row === cellRow)
            continue;
         
         const numberToExclude = this.getCell(row, cellColumn);

         if (numberToExclude)
            numbers.delete(numberToExclude);
      }

      return numbers;
   }

   getAllValidNumbersInGroupForCell(cellRow, cellColumn) {
      let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      const groupSize = this.getBoardSize() / 3;
      const rowForGroupStart = Math.floor((cellRow - 1) / groupSize) * groupSize + 1;
      const columnForGroupStart = Math.floor((cellColumn - 1) / groupSize) * groupSize + 1;

      for (let row = rowForGroupStart; row < rowForGroupStart + groupSize; row++) {
         for (let column = columnForGroupStart; column < columnForGroupStart + groupSize; column++) {
            if (row === cellRow && column === cellColumn)
               continue;

            const numberToExclude = this.getCell(row, column);

            if (numberToExclude)
               numbers.delete(numberToExclude);
         }
      }

      return numbers;
   }
}