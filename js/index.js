// hover on logo
onHoverLogo()

function onHoverLogo () {
    let logoContainer = document.querySelector('.menu__logo')

    logoContainer.addEventListener('mouseover', function() {
        this.children[0].setAttribute('src', '../img/main/logo-active.png'); 
        this.children[0].style.height = '61px'
        this.classList.add('menu__logo_active')
    })

    logoContainer.addEventListener('mouseout', function() {
        this.children[0].setAttribute('src', '../img/main/logo.png');
        this.classList.remove('menu__logo_active');
        this.children[0].style.height = ''
    })
}

// init animation on main screen
let controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
	duration: 100, // the scene should last for a scroll distance of 100px
	offset: 50, // start this scene after scrolling for 50px
})
.setTween(".title-animate", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);

