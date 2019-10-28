# Sudoku

## Pseudocode

//The Sudoku board is represented by an array
//Each row is made up of three seperate mini arrays
//Each sudoku square is made up of three arrays in total, which stack on top of each other
//First need to check that all of the numbers in the square are unique
//Then need to check that the row is all unique numbers
//Lastly need to check that the column is all unique numbers

//Check a square
//Iterate through each array in the square and keep track of all of the numbers
//See if a seperate array includes the new number. If not then push into the array, if it does then return false

//Check a row
//Iterate through each array in a row (3 mini array)
//Keep track of the current number
//See if a seperate array includes the new number. If not then push into the array, if it does then return false

//Check a column
//Check the same index in each mini array (9 arrays in total)
//Keep track of the current number
//See if a seperate array includes the new number. If not then push into the array, if it does then return false

//Check the whole board
//It will always be the same overall structure
// 9 columns (3 mini arrays) and 9 rows (9 mini arrays)
// 9 squares (3 mini arrays)
// Thus iterate through the main array with probably a hard coded length and width

**Update**
//After starting to write out my test arrays, I realized square would probably be the most challenging, so I moved square to last
