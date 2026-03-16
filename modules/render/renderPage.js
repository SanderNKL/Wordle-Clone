import { rows } from "./rows.js";
import { wordBox } from "./wordBox.js";
import { displayKeyboard } from "../displayKeyboard.js";


const gameBoard = document.getElementById('game-board')

export const renderPage = (
) => {
    // RESET THE BOARD
    gameBoard.replaceChildren();

    const attemptsContainerEl = document.createElement('div');
    attemptsContainerEl.classList.add('attempts-container')
    
    // RENDER ROWS
    for (let i = 0; i < 6; i++) {
        const row = []
        const rowEl = document.createElement('div');
        rowEl.classList.add('attempt-row')

        // RENDER BOXES
        for (let j = 0; j < 5; j++) {
            const box = wordBox()
            rowEl.append(box)
            row.push(box)
        }
        rows.push(row)
        attemptsContainerEl.append(rowEl)
    }
    gameBoard.append(attemptsContainerEl)
    displayKeyboard()
}