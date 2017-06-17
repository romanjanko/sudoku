
export default class Board {
   constructor() {
      this.boardSize = 9;
      this.array = [];
   }

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

   isEqual(anotherBoard) {
      for (let row = 1; row <= this.boardSize; row++) {
         for (let column = 1; column <= this.boardSize; column++) {
            if (this.getCell(row, column) !== anotherBoard.getCell(row, column))
               return false;
         }
      }

      return true;
   }

   printToConsole() {
      for (let row = 1; row <= this.boardSize; row++) {
         if (row % 3 === 1)
            console.log("-------------------------");

         let output = "";

         for (let column = 1; column <= this.boardSize; column++) {
            if (column % 3 === 1)
               output += "| ";

            let value = this.getCell(row, column);
            output += `${value ? value : "x"} `;
         }

         console.log(output + "|");
      }
      
      console.log("-------------------------");
   }
}