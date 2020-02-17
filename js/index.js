// Adding event listeners

// mouse over 1
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

// focus 2
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

// blur 3
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

// resize 4
const busImg = document.querySelector('.intro img');
window.addEventListener('resize', () => {
    busImg.src = 'https://www.coachusa.com/sites/default/files/inline-images/Coach-Bus-picture--Header.jpg';
  })

const img2 = document.querySelector('.img-content img');
window.addEventListener('resize', () => {
    img2.src = 'https://www.sciencenews.org/wp-content/uploads/2015/09/100315_coffee_opener_NEW_0.jpg';
})

const img3 = document.querySelector('.img-content .img-fluid rounded');
window.addEventListener('resize', () => {
    img3.src = 'https://si.wsj.net/public/resources/images/B3-DM067_RIGHTS_IM_20190319162958.jpg';
})

const img4 = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
    img4.src = 'https://imt.boatwizard.com/images/1/upload/BLM%20Image.png';
})

// wheel 5
const bodySelect = document.querySelector('body');
bodySelect.addEventListener('wheel', () => {
    bodySelect.style.backgroundColor = 'lightblue';
})

// plays bus sound when img is clicked 6
const firstImage = document.querySelector('div.container img');
const audio = document.getElementById('sound');
console.log(audio);
console.log(firstImage);

let sound = () => {
    audio.play();
}
firstImage.addEventListener('contextmenu', sound);

// copy (sends message when anything in the body is copied) 7
bodySelect.addEventListener('copy', () => {
    alert('Would you like us to send you more information?');
})



// drag 8
let busImage = document.querySelector('header h1');
let dragBus = () => {
    busImage.style.backgroundImage = 'https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-pure-color-watercolor-graffiti-gradient-background-board-design-board-design-image_66713.jpg';
    busImage.style.color = 'blue';
}

// mouseenter 9
busImage.addEventListener('mouseenter', () => {
    busImage.style.fontFamily = 'Baloo';
})

busImg.addEventListener('drag', dragBus);

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

// dblclick 10, and
// prevent default action
const stopRefresh = document.querySelectorAll('.nav-link');
console.log(stopRefresh);
stopRefresh.forEach(navLink => {
    navLink.addEventListener('dblclick', (event) => {
    event.preventDefault();
    console.log('stop refresh');
    })
})

// stretch task
// bounce the sign up buttons
gsap.to('.btn', {duration: 5, y: 30, ease: 'bounce'});

// rotate the title
gsap.to('.logo-heading', {duration: 5, rotation: 360})

// nav background and border changes
gsap.to('.nav a', {duration: 5, x: 70, backgroundColor: '#09bd4e', padding: '8px', borderRadius: '18%', border: '1px solid #02451c', ease: 'bounce', stagger: 0.25});

// header background change
gsap.to('.main-navigation', {duration: 5, backgroundColor: '#c168ed'})