function animationCard(second, timingFunc, delay) {
  const cards = document.querySelectorAll('.card);
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.target.img.classList.toggle('fade');
    })
  })
}
