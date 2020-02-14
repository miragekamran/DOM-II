// Adding event listeners

// mouse over
const navBars = document.querySelectorAll('.nav a');
navBars.forEach(nav => {
    nav.addEventListener('mouseover', () => {
        if (nav.style.color === 'orange') {
            nav.style.color = 'black';
        } else {
            nav.style.color = 'orange';
        }
    })
});

// key down
const keyboardKey = document.querySelectorAll('p');
keyboardKey.addEventListener('keydown', (event) => {
    if (event.keyCode == 1) {
        event.style.background = 'red';
    } else {
        event.style.background = '';
    }
})