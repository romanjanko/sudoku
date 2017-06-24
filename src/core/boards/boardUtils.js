
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

export const getRowFromIndex = (boardSize, index) => Math.floor(index / boardSize) + 1;

export const getColumnFromIndex = (boardSize, index) => index % boardSize + 1;

export const getIndex = (boardSize, row, column) => (row - 1) * boardSize + (column - 1);
