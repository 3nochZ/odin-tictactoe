//players: computer, user
//outcomes: win, lose, draw
//Gameboard object: then row arrays
//maybe closures to save row numbers and add cols then
//factories
//iife module to start the scaffold

//when is the optimal to check winning(well atleast 3 moves)
//outofbound checks
//winning; check on the row you just made a move on only--this doesn't work for cols and diags


function User(name, marker) {
	// id = crypto.randomUUID;
	const getName = () => name;
	const getMarker = () => marker;
	return { getName, getMarker };
}

//winning lines
const lines = [
	[[0, 0], [0, 1], [0, 2]], //row1
	[[1, 0], [1, 1], [1, 2]], //row2
	[[2, 0], [2, 1], [2, 2]], //row3
	[[0, 0], [1, 0], [2, 0]], //col1
	[[0, 1], [1, 1], [2, 1]], //col2
	[[0, 2], [1, 2], [2, 2]], //col3
	[[0, 0], [1, 1], [2, 2]], //diag
	[[0, 2], [1, 1], [2, 0]] //antidiag
]

const Gameboard = (() => {
	const board = Array.from({ length: 3 }, () => Array(3).fill(null));
	let moveCount = 0;

	//boundary and validity checker
	const isNum = (row, col) => Number.isInteger(row) && Number.isInteger(col);
	const isBound = (row, col) => 0 <= row && row <= 2 && 0 <= col && col <= 2;


	const getBoard = () => board.map(row => [...row]);
	const placeMark = (row, col, mark) => {
		if (!isNum(row, col) || !isBound(row, col) || board[row][col] !== null) {
			return false;
		}
		board[row][col] = mark;
		moveCount++;

		//check game status
		return true;
	}
	const getCount = () => moveCount;
	const reset = () => {
		board.forEach(row => row.fill(null));
		moveCount = 0;
	}

	return { placeMark, getBoard, getCount, reset };

})();

const GameController = (() => {
	const players = [User("P1", "X"), User("P2", "O")];
	let activePlayer = players[0];
	let isOver = false;

	const playRound = (row, col) => {
		if (isOver) return;
		if (Gameboard.placeMark(row, col, activePlayer.getMarker())) {
			if (isGameOver()){
				isOver = true;
				return;
			} //stop turn taking if game is over
			activePlayer = activePlayer === players[0] ? players[1] : players[0];
		}
	}

	//check game status
	const isGameOver = () => {
		const board = Gameboard.getBoard();
		const marker = activePlayer.getMarker();

		const status = lines.some(line => line.every(
			([r, c]) => board[r][c] === marker
		));

		if (status) {
			console.log(`${activePlayer.getName()} won!`);
		}

		if (!status && Gameboard.getCount() === 9) {
			console.log(`Draw!`);
			return true;
		}
		return status;
	}

	// TODO: replace the hardcoded players with these names (fall back to "P1"/"P2" if empty)
	const setPlayers = (name1, name2) => {};

	// TODO: activePlayer back to P1, isOver back to false, clear the board
	const reset = () => {};

	// TODO: return activePlayer
	const getActivePlayer = () => {};

	// TODO: return "win", "draw" or null — isGameOver needs to store this somewhere
	const getResult = () => {};

	return { playRound, setPlayers, reset, getActivePlayer, getResult };
}

)();

// if moveCount
// Gameboard.placeMark(1,1,0);
// Gameboard.getBoard()[0][0] = 'a';
GameController.playRound(0, 0); // X
GameController.playRound(1, 0); // O
GameController.playRound(0, 1); // X
GameController.playRound(1, 1); // O
GameController.playRound(0, 2); // X

GameController.playRound(2, 0); // O

console.table(Gameboard.getBoard());

const DisplayController = (() => {
	const boardEl = document.querySelector("#board");
	const statusEl = document.querySelector("#status");
	const setupForm = document.querySelector("#setup");
	const restartBtn = document.querySelector("#restart");

	const render = () => {};

	// TODO: one listener for all cells (event delegation)
	//   - ignore clicks that didn't hit a cell
	//   - read row/col from the clicked cell (they come back as strings!)
	//   - playRound, then render
	boardEl.addEventListener("click", (e) => {});

	// TODO: stop the page reload, read both inputs, setPlayers, reset, render
	setupForm.addEventListener("submit", (e) => {});

	// TODO: reset, render
	restartBtn.addEventListener("click", () => {});

	render();
})();

