var input = document.querySelector('input');
var cards = document.querySelectorAll('.card');

input.addEventListener('input', () => {
    let inputValue = input.value.toLowerCase(); // Get the current input value and convert to lowercase
    cards.forEach((card) => {
        let cardText = card.querySelector('h3').textContent.toLowerCase(); // Get the card's h3 text and convert to lowercase
        if (cardText.includes(inputValue)) {
            card.style.display = 'block'; // Show the card if the text matches the input
        } else {
            card.style.display = 'none'; // Hide the card if the text doesn't match
        }
    });
});
