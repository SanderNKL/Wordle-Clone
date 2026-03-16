import { renderPage } from "./modules/render/renderPage.js"
import { typeEvent } from "./modules/typeEvent.js"
import { pickWord } from "./modules/pickWord.js"

let word = pickWord()
console.log(word)
// RENDER ROWS
renderPage()
typeEvent(word)