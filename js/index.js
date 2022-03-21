// hover on logo
onHoverLogo()
activeMobileMenu()
hoverIconFooter()

function onHoverLogo () {
    let logoContainer = document.querySelector('.menu__logo')
    let pathName = location.pathname === '/index.html' ? '' : location.pathname
    let url = location.origin + pathName


    logoContainer.addEventListener('mouseover', function() {
        this.children[0].setAttribute('src', `${url}/img/main/logo-active.svg`); 
        this.children[0].style.height = '61px'
        this.classList.add('menu__logo_active')
        console.log(location);
    })

    logoContainer.addEventListener('mouseout', function() {
        this.children[0].setAttribute('src', `${url}/img/main/logo.svg`);
        this.classList.remove('menu__logo_active');
        this.children[0].style.height = ''
    })
}

function activeMobileMenu () {
    let pathName = location.pathname === '/index.html' ? '' : location.pathname
    let url = location.origin + pathName

    let logo = document.querySelector('.menu-mobile__logo')
    let menu = document.querySelector('.menu-mobile__card_hide')

    logo.addEventListener('click', function() {
        menu.classList.add('menu-mobile__card')
        
        this.children[0].setAttribute('src', `${url}/img/main/logo-active.svg`)
        this.children[0].style.height = '30px'
        document.body.style.overflow = "hidden"

        let close = document.querySelector('.menu-mobile__close')
        if(close) {
            close.addEventListener('click', function() {
                menu.classList.remove('menu-mobile__card')
                logo.children[0].setAttribute('src', `${url}/img/main/logo-mobile.svg`)
                logo.children[0].style.height = '47px'
                document.body.style.overflow = ""
            })
        }
    })
}

function hoverIconFooter () {
    let logo = document.querySelectorAll('.footer__row img')

    let pathName = location.pathname === '/index.html' ? '' : location.pathname
    let url = location.origin + pathName
    
    logo.forEach(el => {
        el.addEventListener('mouseover', function() {
            el.setAttribute('src', `${url}/img/footer/${el.alt}-hover.svg`)
        })

        el.addEventListener('mouseout', function() {
            el.setAttribute('src', `${url}/img/footer/${el.alt}.svg`)
        })
    })
}

// Плавный скрол меню

$("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$("#mobile-menu").on("click","a", function (event) {
    event.preventDefault();

    let pathName = location.pathname === '/index.html' ? '' : location.pathname
    let url = location.origin + pathName

    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    $('.menu-mobile__card_hide').removeClass('menu-mobile__card')
    $('#mobile-menu a').removeClass('menu-mobile__item_active')
    $(this).addClass('menu-mobile__item_active')
    $('.menu-mobile__logo > img').prop('src', `${url}/img/main/logo-mobile.png`)
    $('.menu-mobile__logo > img').css({'height':'47px'})
    document.body.style.overflow = ""
});

$("#footer-logo").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    $('.menu-mobile__row .menu-mobile__item_active').removeClass('menu-mobile__item_active')
});

// init animation on main screen
// let controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({
// 	duration: 100, // the scene should last for a scroll distance of 100px
// 	offset: 50, // start this scene after scrolling for 50px
// })
// .setTween(".title-animate", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
// .addTo(controller);

