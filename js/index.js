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

// focus
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

// blur
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

// resize
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

// wheel
const bodySelect = document.querySelector('body');
bodySelect.addEventListener('wheel', () => {
    bodySelect.style.backgroundColor = 'lightblue';
})

// plays bus sound when img is clicked
const firstImage = document.querySelector('div.container img');
const audio = document.getElementById('sound');
console.log(audio);
console.log(firstImage);

let sound = () => {
    audio.play();
}
firstImage.addEventListener('contextmenu', sound);

// copy (sends message when anything in the body is copied)
bodySelect.addEventListener('copy', () => {
    alert('Would you like us to send you more information?');
})

// keydown
bodySelect.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {
        console.log(bodySelect)
      return;
    }
    // do something
  });

  // drag
let busImage = document.querySelector('header');
let dragBus = () => {
    busImage.style.backgroundImage = 'https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-pure-color-watercolor-graffiti-gradient-background-board-design-board-design-image_66713.jpg';
    busImage.style.color = 'blue';
}

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



// dblclick and
// prevent default action
const stopRefresh = document.querySelectorAll('.nav-link');
console.log(stopRefresh);
stopRefresh.forEach(navLink => {
    navLink.addEventListener('dblclick', (event) => {
    event.preventDefault();
    console.log('stop refresh');
    })
})



