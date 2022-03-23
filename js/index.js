onHoverLogo()
activeMobileMenu()
hoverIconFooter()
flowingScrollMenu()
animateTitleOnMainPage()
animateCardOnHover()
animateAdvantage()
animateYes()

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

function animateTitleOnMainPage () {
    const titleYestoday = document.getElementById('title-active')
    titleYestoday.style.opacity='1'
    const coordsTitleYestoday = titleYestoday.getBoundingClientRect()
    const heightTitleYestoday = titleYestoday.offsetHeight
    const topCoordsWindowTitleYestoday = coordsTitleYestoday.top
    const bottomCoordsDocumentTitleYestoday = coordsTitleYestoday.bottom + window.pageYOffset + heightTitleYestoday/2
    
    const scrollerEndTitleYes = topCoordsWindowTitleYestoday + heightTitleYestoday
    const endTitleYes = bottomCoordsDocumentTitleYestoday + heightTitleYestoday
    const startTitleYes = heightTitleYestoday 

    console.log(heightTitleYestoday);
    console.log(startTitleYes);

    const initTitleYestoday = gsap.timeline({
        scrollTrigger: {
            start: `${startTitleYes}`,
            end: `${bottomCoordsDocumentTitleYestoday} ${topCoordsWindowTitleYestoday}`,
            scrub: true,
            // markers: true
        }
    });
    initTitleYestoday.from("#title-active", {yPercent: 130, duration: 1})

    const initTitleYes = gsap.timeline({
        scrollTrigger: {
            start: '5px',
            end: `${endTitleYes} ${scrollerEndTitleYes}`,
            scrub: true,
            // markers: true
        }
    });
    initTitleYes.from("#title-hide", {yPercent: 110, duration: 1})
}

function animateCardOnHover () {
    const cards = document.querySelector('.cards')

    let pathName = location.pathname === '/index.html' ? '' : location.pathname
    let url = location.origin + pathName

    cards.addEventListener('mouseover', function(e) {
        let target = e.target
        
        if(target.className !== 'card__image') return

        target.setAttribute('src', `${url}/img/projects/${target.alt}.gif`)
        document.querySelector(`.card__title_${target.alt}`).style.display = 'block'
    });

    cards.addEventListener('mouseout', function(e) {
        let target = e.target
        
        if(target.className !== 'card__image') return

        target.setAttribute('src', `${url}/img/projects/${target.alt}.svg`)
        document.querySelector(`.card__title_${target.alt}`).style.display = 'none'
    })
}
  
function animateAdvantage () {
    const initAnim = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage__title',
            start: 'top top'
        }
    });
 
    initAnim.add( gsap.from("#advantage-anime0", {width:"0px"}) );
    initAnim.add( gsap.from("#advantage-anime1", {width:"0px"}) );
    initAnim.add( gsap.from("#advantage-anime2", {width:"0px"}) );
    initAnim.add( gsap.from("#advantage-anime3", {width:"0px"}) );
}

function animateYes () {
    const init = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage-logo',
            start: 'bottom 70%', // start scrollStart (относительно окна)
            end: '90% 50%', // 70% относительно trigger, 50% - относительно окна
            scrub: true,
            // markers: true
        }
    });
    init.to('.advantage__active', {yPercent: -150, duration: 1})
}

