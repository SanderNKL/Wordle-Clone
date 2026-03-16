import { alterUserInput } from "../userInput.js"


export const clickEvent = (element) => element.addEventListener('click', () => {
    alterUserInput(element.textContent.toLowerCase());
})