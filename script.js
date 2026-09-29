//players: computer, user
//outcomes: win, lose, draw
//Gameboard object: then row arrays
//maybe closures to save row numbers and add cols then
//factories
//iife module to start the scaffold

//when is the optimal to check winning(well atleast 3 moves)
//outofbound checks
//winning; check on the row you just made a move on only

function User(name, marker){
		// id = crypto.randomUUID;
		const getName = () => name;
		const getMarker = () => marker;
		return {getName, getMarker};
};

const Gameboard = (() => {
	const board = Array.from({length: 3}, () => Array(3).fill(null));
	let moveCount = 0;

	const getBoard = () => board;
	const placeMark = (row, col, mark) => {
		if (board[row][col] !== null){
			return false;
		}
		board[row][col] = mark;
		moveCount++;

		//check game status
		return true;
	}
	const getCount = () => moveCount;
	
	return {placeMark, getBoard, getCount};

})();

// const GameController = (() => {
// 	const players = 

	
// })

// if moveCount
Gameboard.placeMark(1,1,0)
console.table(Gameboard.getBoard());
