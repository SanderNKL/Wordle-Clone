import { currentWord } from "./rules/currentWord.js";


export const displayRow = (row) => {
    // ENSURE WE LABEL THE AMOUNT OF YELLOWS CORRECTLY
    let availableLetters = [...currentWord];

    // LABEL EACH LETTER
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            availableLetters.splice(0, 1);

            let box = row[i];
            let letter = box.textContent.toLowerCase();

            // ANIMATE THE BOX
            box.classList.add("reveal");

            if (currentWord[i] == letter) {
                box.classList.add('correct')
            } else if (availableLetters.includes(letter)) {
                box.classList.add('included')
            } else (
                box.classList.add('incorrect')
            )
        }, i * 300)
    }
}