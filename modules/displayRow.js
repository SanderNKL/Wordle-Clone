import { Correct, Misplaced, Invalid } from "./submissions.js";


export const displayRow = (row, submission) => {
    for (let i = 0; i < submission.placements.length; i++) {
        setTimeout(() => {
            let box = row[i];
            let placement = submission.placements[i]

            // ANIMATE THE BOX
            box.classList.add("reveal");
            if (placement instanceof Correct) {
                box.classList.add('correct')
            } else if (placement instanceof Misplaced) {
                box.classList.add('misplaced')
            } else (
                box.classList.add('incorrect')
            )
        }, i * 300)
    }
}