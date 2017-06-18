import { boardToString, 
         areBoardsEqual, 
         getAllUnusedNumbersInRow, 
         getAllUnusedNumbersInColumn, 
         getAllUnusedNumbersInGroup } from './boardExtensions';

export default class Board {
   constructor() {
      this.boardSize = 9;
      this.array = [];
   }

   getBoardSize = () => this.boardSize;

   checkBoundaries(row, column) {
      if (row < 1 || row > 9)
         throw new Error(`Row cannot be ${row} for the board of size ${this.boardSize}.`);
      
      if (column < 1 || column > 9)
         throw new Error(`Column cannot be ${column} for the board of size ${this.boardSize}.`);
   }

   checkNewValue(value) {
      if (value < 1 || value > 9)
         throw new Error(`Cell cannot be ${value}.`);
   }

   getCell(row, column) {
      this.checkBoundaries(row, column);
      return this.array[row * this.boardSize + column];
   }

   setCell(row, column, value) {
      this.checkBoundaries(row, column);
      this.checkNewValue(value);
      this.array[row * this.boardSize + column] = value;
   }

   deleteCell(row, column) {
      this.setCell(row, column, undefined);
   }

   getAllPossibleNumbersForEmptyCell(row, column) {
      if (this.getCell(row, column))
         throw new Error(`Cell in row ${row} and column ${column} should be empty.`);
      
      const numbersForRow = getAllUnusedNumbersInRow(this, row);
      const numbersForColumn = getAllUnusedNumbersInColumn(this, column);
      const numbersForGroup = getAllUnusedNumbersInGroup(this, row, column);

      // console.log(numbersForRow, numbersForColumn, numbersForGroup);

      const intersectionOfNumbersForRowAndColumn = 
         new Set([...numbersForRow].filter(x => numbersForColumn.has(x)));
      
      return [...intersectionOfNumbersForRowAndColumn].filter(x => numbersForGroup.has(x));
   }

   isEqual = (anotherBoard) => areBoardsEqual(this, anotherBoard);

   printToConsole = () => console.log(boardToString(this));
}