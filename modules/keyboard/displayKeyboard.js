import { clickEvent } from "./clickEvent.js";
import { Correct, Misplaced, submissions } from "../submissions.js";

const keyboardElement = document.getElementById('game-keyboard');

export const displayKeyboard = () => {
    keyboardElement.replaceChildren('')

    let keyboardRows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'backspace'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ø', 'æ', 'enter'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ]

    keyboardRows.forEach(keyboardRow => {
        const rowEl = document.createElement('div');
        rowEl.classList.add('keyboard-row');

        keyboardRow.forEach(key => {
            const keyEl = document.createElement('div');
            keyEl.classList.add('keyboard-key')
            keyEl.textContent = key.toUpperCase();

            submissions.forEach(row => {
                if (row.correctLetters.includes(key)) {
                    keyEl.classList.add('correct')
                } else if (row.misplacedLetters.includes(key)) {
                    keyEl.classList.add('misplaced')
                } else if (row.incorrectLetters.includes(key)) {
                    keyEl.classList.add('incorrect')
                }
            })

            // MAKE BUTTON CLICKABLE
            clickEvent(keyEl)

            rowEl.append(keyEl)
        })
        keyboardElement.append(rowEl)
    })
}