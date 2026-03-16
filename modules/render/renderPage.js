import { rows } from "./rows.js";
import { wordBox } from "./wordBox.js";


export const renderPage = (
) => {
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
    document.body.append(attemptsContainerEl)
}