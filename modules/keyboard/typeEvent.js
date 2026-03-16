import { alterUserInput } from "../userInput.js";


export const typeEvent = () => document.addEventListener('keydown', (e) => {
    alterUserInput(e.key.toLowerCase());
})