
export const areBoardsEqual = (board1, board2) => {
   if (board1.getBoardSize() !== board2.getBoardSize())
      return false;

   for (let row = 1; row <= board1.getBoardSize(); row++) {
      for (let column = 1; column <= board1.getBoardSize(); column++) {
         if (board1.getCell(row, column) !== board2.getCell(row, column))
            return false;
      }
   }

   return true;
};

export const boardToString = (board) => {
   let output = "";

   for (let row = 1; row <= board.getBoardSize(); row++) {
      if (row % 3 === 1)
         output += "-------------------------\n";

      for (let column = 1; column <= board.getBoardSize(); column++) {
         if (column % 3 === 1)
            output += "| ";

         let value = board.getCell(row, column);
         output += `${value ? value : "x"} `;
      }

      output += "|\n";
   }

   return output + "-------------------------\n";
};

export const getAllUnusedNumbersInRow = (board, row) => {
   let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

   for (let column = 1; column <= board.getBoardSize(); column++) {
      const numberToExclude = board.getCell(row, column);

      if (numberToExclude)
         numbers.delete(numberToExclude);
   }

   return numbers;
};

export const getAllUnusedNumbersInColumn = (board, column) => {
   let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

   for (let row = 1; row <= board.getBoardSize(); row++) {
      const numberToExclude = board.getCell(row, column);

      if (numberToExclude)
         numbers.delete(numberToExclude);
   }

   return numbers;
};

export const getAllUnusedNumbersInGroup = (board, rowForCell, columnForCell) => {
   let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
   const groupSize = board.getBoardSize() / 3;
   const rowForGroupStart = Math.floor((rowForCell - 1) / groupSize) * groupSize + 1;
   const columnForGroupStart = Math.floor((columnForCell - 1) / groupSize) * groupSize + 1;

   for (let row = rowForGroupStart; row <= rowForGroupStart + groupSize; row++) {
      for (let column = columnForGroupStart; column <= columnForGroupStart + groupSize; column++) {
         const numberToExclude = board.getCell(row, column);

         if (numberToExclude)
            numbers.delete(numberToExclude);
      }
   }

   return numbers;
};