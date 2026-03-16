const keyboardElement = document.getElementById('game-keyboard');

export const displayKeyboard = (submissions = []) => {
    keyboardElement.replaceChildren('')
    let usedLetters = [...submissions];
    submissions.forEach(word => word.forEach(letter => {
            if(!usedLetters.includes(letter)) {
                usedLetters.push(letter)
            }
        })
    )

    let keyboardRows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'backspace'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ø', 'æ', 'enter'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ]

    keyboardRows.forEach(keyboardRow => {
        const rowEl = document.createElement('div');
        rowEl.classList.add('keyboard-row')
        keyboardRow.forEach(key => {
            const keyEl = document.createElement('div');
            keyEl.classList.add('keyboard-key')
            keyEl.textContent = key.toUpperCase();
            rowEl.append(keyEl)
        })
        keyboardElement.append(rowEl)
    })
}