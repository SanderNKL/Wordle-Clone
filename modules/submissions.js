import { currentWord } from "./rules/currentWord.js";


export class Correct {}
export class Invalid {}
export class Misplaced {}


export class Submission {
    constructor (userInputArr) {
        this.placements = this.validate(userInputArr);
    }

    validate(userInputArr) {
        let curruserInputArr = [...currentWord];
        let availableLetters = [...curruserInputArr];
        let output = []
        
        /*
        Loops over the submitted word
        
        Correct if in the same place,
        Misplaced if wrongly placed
        Invalid if not included.
        */

        /*
        MÅ GJØRE:
        - VALIDERE GRØNNE, GULE, GRÅ
        - IKKE GI GUL DERSOM DEN IKKE FINNES / EKSTRA

        SJEKK OM BOKSTAV ER PÅ RETT PLASS
            RIKTIG -> GRØNN VISST DEN ER. FJERN BOKSTAV
            FEIL PLASSERT -> GUL VISST 
        */


        // FINN GRØNNE
        for (let i = 0; i < userInputArr.length; i++) {
            let letter = userInputArr[i];

            if (letter == curruserInputArr[i]) {
                output.push(new Correct)
                availableLetters.splice(i, 1)
            } else {
                output.push(new Invalid)
            }
        }

        // FINN GULE
        for (let i = 0; i < userInputArr.length; i++) {
            let letter = userInputArr[i];
            if (
                !(output[i] instanceof Correct)
                && availableLetters.includes(letter)
            ) {
                output[i] = new Misplaced
                availableLetters.splice(i, 1)
            }
        }

        return output
    }
}

export const submissions = []