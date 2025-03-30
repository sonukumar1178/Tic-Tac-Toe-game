let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // Player0 starts

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");

        if (turn0) {
            box.innerText = "O"; // Corrected "0" to "O"
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    // Disable all boxes after a winner is found
    boxes.forEach((box) => (box.disabled = true));
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("Winner:", pos1Val);
            showWinner(pos1Val);
            return; // Stop checking once a winner is found
        }
    }
};

// Reset game function
const resetGame = () => {
    turn0 = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
};

// Attach reset function to buttons
reset.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
