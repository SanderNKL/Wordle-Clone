import { rows } from "./render/rows.js"
import { submissions } from "./submissions.js"
import { allowedLetters } from "./rules/allowedLetters.js"
import { validWords } from "./rules/validWords.js"
import { displayRow } from "./displayRow.js"


let currSentence = []

export const typeEvent = (
    todaysWord
) => document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const currWord = currSentence.join("")
        if (currWord.length < 5) {
            return alert('NOT ENOUGH LETTERS!')
        }
        else if (!validWords.includes(currWord)) {
            return alert('NOT A WORD!')
        }

        displayRow(todaysWord, rows[submissions.length])
        submissions.push(currSentence)
        currSentence = []

        if (currWord == todaysWord) {
            return alert('You win!')
        }
    }

    else if (e.key === 'Backspace') {
        currSentence.splice(currSentence.length-1, 1)
        const rowsEl = rows[submissions.length][currSentence.length];
        rowsEl.textContent = ""
    }

    else if (currSentence.length < 5 && allowedLetters.includes(e.key)) {
        currSentence.push(e.key)
        const rowsEl = rows[submissions.length][currSentence.length-1];
        rowsEl.textContent = e.key
    }
})