document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        if (card.classList.contains('flipped')) {
            setTimeout(() => {
                card.classList.remove('flipped');
            }, 5000);
        }
    });
});
