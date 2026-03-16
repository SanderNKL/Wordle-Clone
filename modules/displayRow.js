

export const displayRow = (todaysWord, row) => {
    for (let i = 0; i < 5; i++) {
        let box = row[i];
        if (todaysWord[i] == box.textContent) {
            box.classList.add('correct')
        } else if (todaysWord.includes(box.textContent)) {
            box.classList.add('included')
        } else (
            box.classList.add('incorrect')
        )
    }
    row.forEach(box => {
        
    })
}