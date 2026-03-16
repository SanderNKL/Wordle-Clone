import { pickWord } from "./pickWord.js"
import { renderPage } from "./render/renderPage.js"


export const startGame = () => {
    pickWord()
    renderPage()
}