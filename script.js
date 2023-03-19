const buttons = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const drops = document.querySelectorAll('.drop');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    if (answers[i].className === 'answer') {
      answers[i].classList.add('shown');
    } else {
      answers[i].classList.remove('shown');
    }

    if (drops[i].className === 'drop') {
      drops[i].classList.add('checked');
    } else {
      drops[i].classList.remove('checked');
    }
  });
}
