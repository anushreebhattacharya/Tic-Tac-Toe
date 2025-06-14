document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const startButton = document.getElementById("start");
    let currentPlayer = "X";
    let gameOver = false;

    function checkWinner() {
        const winPatterns = [
            [0,1,2], [3,4,5], [6,7,8], // rows
            [0,3,6], [1,4,7], [2,5,8], // columns
            [0,4,8], [2,4,6]           // diagonals
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (
                boxes[a].textContent !== "" &&
                boxes[a].textContent === boxes[b].textContent &&
                boxes[a].textContent === boxes[c].textContent
            ) {
                boxes[a].style.backgroundColor = "#90ee90"; // highlight winner
                boxes[b].style.backgroundColor = "#90ee90";
                boxes[c].style.backgroundColor = "#90ee90";
                alert(`${boxes[a].textContent} wins!`);
                gameOver = true;
                return;
            }
        }

        if ([...boxes].every(box => box.textContent !== "") && !gameOver) {
            alert("It's a draw!");
            gameOver = true;
        }
    }

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            if (box.textContent === "" && !gameOver) {
                box.textContent = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });

    startButton.addEventListener("click", () => {
        boxes.forEach(box => {
            box.textContent = "";
            box.style.backgroundColor = "#00ffff";
        });
        currentPlayer = "X";
        gameOver = false;
    });
});