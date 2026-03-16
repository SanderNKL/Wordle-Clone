import { validWords } from "./rules/validWords.js";
import { setCurrWord } from "./rules/currentWord.js";


export const pickWord = () => {
    const number = Math.floor(Math.random() * validWords.length - 1)
    setCurrWord(validWords[number])
}