onHoverLogo()
activeMobileMenu()
hoverIconFooter()
flowingScrollMenu()
animateTitleOnMainPage()

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

function flowingScrollMenu () {
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
}



function animateTitleOnMainPage() {
    const titleYestoday = document.getElementById('title-active')
    const coordsTitleYestoday = titleYestoday.getBoundingClientRect()
    const topCoordsWindowTitleYestoday = coordsTitleYestoday.top
    const bottomCoordsDocumentTitleYestoday = coordsTitleYestoday.bottom + window.pageYOffset
    const heightTitleYestoday = titleYestoday.offsetHeight

    const scrollerEndTitleYes = topCoordsWindowTitleYestoday + heightTitleYestoday
    const endTitleYes = bottomCoordsDocumentTitleYestoday + heightTitleYestoday*2
    const startTitleYes = heightTitleYestoday - 20

    console.log(heightTitleYestoday);
    console.log(startTitleYes);

    const initTitleYestoday = gsap.timeline({
        scrollTrigger: {
            start: '10px',
            end: `${bottomCoordsDocumentTitleYestoday} ${topCoordsWindowTitleYestoday}`,
            scrub: true,
            markers: true
        }
    });
    initTitleYestoday.to("#title-active", {yPercent: 130, duration: 1})

    const initTitleYes = gsap.timeline({
        scrollTrigger: {
            start: `${startTitleYes}`,
            end: `${endTitleYes} ${scrollerEndTitleYes}`,
            scrub: true,
            markers: true
        }
    });
    initTitleYes.to("#title-hide", {yPercent: 110, duration: 1})
}

// const tl = gsap.timeline({
//     scrollTrigger: {
//         // trigger: 10,
//         start: '10px',
//         end: `${bottomAnimate} ${topAnimate}`, //относительно document, относительно окна
//         scrub: true,
//         markers: true
//     }
//   });
//   tl.to("#title-active", {yPercent: 120, duration: 1})

//   const tl2 = gsap.timeline({
//     scrollTrigger: {
//         // trigger: 20,
//         start: heightTitleAnimate / 3,
//         end: "10% 50%",
//       scrub: true,
//         markers: true
//     }
//   });
//   tl2.to('#title-hide', {yPercent: 110, duration: 1})
  

