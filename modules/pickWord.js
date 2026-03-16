import { validWords } from "./rules/validWords.js";


export const pickWord = () => {
    const number = Math.floor(Math.random() * validWords.length - 1)
    return validWords[number]
}