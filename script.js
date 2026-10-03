//players: computer, user
//outcomes: win, lose, draw
//Gameboard object: then row arrays
//maybe closures to save row numbers and add cols then
//factories
//iife module to start the scaffold

//when is the optimal to check winning(well atleast 3 moves)
//outofbound checks
//winning; check on the row you just made a move on only

//board still makes the board editable

function User(name, marker){
		// id = crypto.randomUUID;
		const getName = () => name;
		const getMarker = () => marker;
		return {getName, getMarker};
};

//winning lines
const lines = [
			[[0,0], [0, 1], [0, 2]], //row1
			[[1,0], [1, 1], [1, 2]], //row2
			[[2,0], [2, 1], [2, 2]], //row3
			[[0,0], [1, 0], [2, 0]], //col1
			[[0,1], [1, 1], [2, 1]], //col2
			[[0,2], [1, 2], [2, 2]], //col3
			[[0,0], [1, 1], [2, 2]], //diag
			[[0,2], [1, 1], [2, 0]] //antidiag
		]

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

const GameController = (() => {
	const players = [User("P1", "X"), User("P2", "O")];
	let activePlayer = players[0];

	const playRound = (row, col) => {
		if (activePlayer.placeMark(row, col)) {
			activePlayer = activePlayer == players[0] ? players[1] : players[0];
		}
		return;
	}

	//check game status
	const isGameOver = () => {
		if (Gameboard.getCount() == 9) {
			console.log(`Draw!`);
			return true;
		}
		return lines.some(line => line.every(
			([r, c]) => Gameboard.getBoardboard()[r][c] === activePlayer.getMarker()
		));
		}
	}
	
)();

// if moveCount
Gameboard.placeMark(1,1,0);
// Gameboard.getBoard()[0][0] = 'a';
console.table(Gameboard.getBoard());

