import { clickEvent } from "./clickEvent.js";
import { submissions } from "../submissions.js";

const keyboardElement = document.getElementById('game-keyboard');

export const displayKeyboard = () => {
    keyboardElement.replaceChildren('')
    
    const letterStates = {};

    submissions.forEach(word => {
        word.forEach(({ letter, state }) => {

            if (!letterStates[letter]) {
                letterStates[letter] = state;
            }

            // Priority: correct > included > incorrect
            if (state === "correct") {
                letterStates[letter] = "correct";
            } else if (state === "included" && letterStates[letter] !== "correct") {
                letterStates[letter] = "included";
            } else if (
                state === "incorrect" &&
                letterStates[letter] !== "correct" &&
                letterStates[letter] !== "included"
            ) {
                letterStates[letter] = "incorrect";
            }
        });
    });


    let keyboardRows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'backspace'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ø', 'æ', 'enter'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ]

    keyboardRows.forEach(keyboardRow => {
        const rowEl = document.createElement('div');
        rowEl.classList.add('keyboard-row')
        keyboardRow.forEach(key => {
            const keyEl = document.createElement('div');
            keyEl.classList.add('keyboard-key')
            keyEl.textContent = key.toUpperCase();
            
            const state = letterStates[key];
            if (state === "correct") {
                keyEl.classList.add("correct");
            } else if (state === "included") {
                keyEl.classList.add("included");
            } else if (state === "incorrect") {
                keyEl.classList.add("incorrect");
            }

            // MAKE BUTTON CLICKABLE
            clickEvent(keyEl)

            rowEl.append(keyEl)
        })
        keyboardElement.append(rowEl)
    })
}