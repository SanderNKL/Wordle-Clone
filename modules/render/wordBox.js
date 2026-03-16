export const wordBox = (word = "") => {
    const wordBox = document.createElement('div');
    wordBox.textContent = word
    wordBox.classList.add('word-box');
    return wordBox
}