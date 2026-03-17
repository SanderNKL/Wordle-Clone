
import { allowedLetters } from "./rules/allowedLetters.js"
import { rows } from "./render/rows.js";
import { submissions } from "./submissions.js";
import { validWords } from "./rules/validWords.js";
import { displayRow } from "../modules/displayRow.js"
import { displayKeyboard } from "./keyboard/displayKeyboard.js";
import { currentWord } from "./rules/currentWord.js";
import { Submission } from "./submissions.js";


export let userInput = [];


const enterWord = (word) => {
    if (word.length < 5) {
        return alert('NOT ENOUGH LETTERS!')
    }
    else if (!validWords.includes(word)) {
        return alert('NOT A WORD!')
    }

    // CREATE A SUBMISSION
    let submission = new Submission([...word])
    displayRow(rows[submissions.length], submission)
    submissions.push(submission)

    userInput = []
    // displayKeyboard()
    
    console.log('now at:', submissions.length, 'words')
    if (word == currentWord) {
        return alert('You win!')
    }
    else if (submissions.length == 6) {
        return alert(`YOU LOSE! The word was ${currentWord}`)
    }
}

export const alterUserInput = (letter) => {
    if (letter === 'enter') {
        enterWord(userInput.join(""))
    }

    else if (letter === 'backspace') {
        userInput.splice(userInput.length-1, 1)
        const rowsEl = rows[submissions.length][userInput.length];
        rowsEl.textContent = ""
    }

    else if (userInput.length < 5 && allowedLetters.includes(letter)) {
        userInput.push(letter)
        const rowsEl = rows[submissions.length][userInput.length-1];
        rowsEl.textContent = letter.toUpperCase()
    }
}