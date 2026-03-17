import { currentWord } from "./rules/currentWord.js";


export class Correct {}
export class Invalid {}
export class Misplaced {}


export class Submission {
    constructor (wordArr) {
        this.placements = this.validate(wordArr);
    }

    validate(wordArr) {
        let currWordArr = [...currentWord];
        let availableLetters = [...currWordArr];
        let output = []
        
        /*
        Loops over the submitted word
        
        Correct if in the same place,
        Misplaced if wrongly placed
        Invalid if not included.
        */
        for (let i = 0; i < wordArr.length; i++) {
            let letter = wordArr[i];
            if (letter == currWordArr[i]) {
                output.push(new Correct)
            } else if (availableLetters.includes(letter)) { 
                output.push(new Misplaced)
            } else {
                output.push(new Invalid)
            }
            availableLetters.splice(0, 1)
        }
        return output
    }
}

export const submissions = []