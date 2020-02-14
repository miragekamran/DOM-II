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
keyboardKey[1].addEventListener('keydown', (event) => {
    event.target.style.color = 'red';
});

// focus and blur
const focusNav = document.querySelectorAll('.nav a');
console.log(focusNav)
focusNav.forEach(nav => {
    nav.addEventListener('focus', (event) => {
    event.target.style.color = 'red';
    })
    nav.addEventListener('blur', (e) => {
        e.target.style.color = 'blue';
    })
})

const focusH2 = document.querySelectorAll('.btn');
console.log(focusH2)
focusH2.forEach(t => {
    t.addEventListener('focus', (f) => {
    f.target.style.color = 'red';
    })
    t.addEventListener('blur', (b) => {
        b.target.style.color = 'blue';
    })
})


// stop propogation
const bodyColor = document.querySelector('body');
console.log(bodyColor)

bodyColor.addEventListener('click', (event) => {
    bodyColor.style.backgroundColor = 'yellow';
    event.stopPropagation();
})

const titleColor = document.querySelectorAll('h2');
console.log(titleColor)
titleColor.forEach(color => {
    color.addEventListener('click', (event) => {
        color.style.backgroundColor = 'blue';
        event.stopPropagation();
})
})


// dblclick
// prevent default action
const stopRefresh = document.querySelectorAll('.nav-link');
console.log(stopRefresh);
stopRefresh.forEach(navLink => {
    navLink.addEventListener('dblclick', (event) => {
    event.preventDefault();
    console.log('stop refresh');
    })
})



