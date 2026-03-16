import { rows } from "./render/rows.js"
import { submissions } from "./submissions.js"
import { allowedLetters } from "./rules/allowedLetters.js"
import { validWords } from "./rules/validWords.js"
import { displayRow } from "./displayRow.js"
import { currentWord } from "./rules/currentWord.js"


let currSentence = []

const enterWord = (word) => {
    if (word.length < 5) {
        return alert('NOT ENOUGH LETTERS!')
    }
    else if (!validWords.includes(word)) {
        return alert('NOT A WORD!')
    }

    displayRow(rows[submissions.length])
    submissions.push(currSentence)
    currSentence = []

    if (word == currentWord) {
        return alert('You win!')
    }
    else if (submissions.length == 6) {
        return alert(`YOU LOSE! The word was ${currentWord}`)
    }
}

export const typeEvent = () => document.addEventListener('keydown', (e) => {
    let letter = e.key.toLowerCase();

    if (letter === 'enter') {
        enterWord(currSentence.join(""))
    }

    else if (letter === 'backspace') {
        currSentence.splice(currSentence.length-1, 1)
        const rowsEl = rows[submissions.length][currSentence.length];
        rowsEl.textContent = ""
    }

    else if (currSentence.length < 5 && allowedLetters.includes(letter)) {
        currSentence.push(letter)
        const rowsEl = rows[submissions.length][currSentence.length-1];
        rowsEl.textContent = letter.toUpperCase()
    }
})