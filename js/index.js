// hover on logo
onHoverLogo()
activeMobileMenu()

function onHoverLogo () {
    let logoContainer = document.querySelector('.menu__logo')

    logoContainer.addEventListener('mouseover', function() {
        this.children[0].setAttribute('src', `${location.origin}/img/main/logo-active.png`); 
        this.children[0].style.height = '61px'
        this.classList.add('menu__logo_active')
        console.log(location);
    })

    logoContainer.addEventListener('mouseout', function() {
        this.children[0].setAttribute('src', './img/main/logo.png');
        this.classList.remove('menu__logo_active');
        this.children[0].style.height = ''
    })
}

function activeMobileMenu () {
    let logo = document.querySelector('.menu-mobile__logo')
    let menu = document.querySelector('.menu-mobile__card_hide')

    logo.addEventListener('click', function() {
        menu.classList.add('menu-mobile__card')
        
        this.children[0].setAttribute('src', './img/main/logo-active.png')
        this.children[0].style.height = '30px'

        let close = document.querySelector('.menu-mobile__close')
        if(close) {
            close.addEventListener('click', function() {
                menu.classList.remove('menu-mobile__card')
                logo.children[0].setAttribute('src', './img/main/logo-mobile.png')
                logo.children[0].style.height = '47px'
            })
        }
    })
}

// init animation on main screen
// let controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({
// 	duration: 100, // the scene should last for a scroll distance of 100px
// 	offset: 50, // start this scene after scrolling for 50px
// })
// .setTween(".title-animate", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
// .addTo(controller);

