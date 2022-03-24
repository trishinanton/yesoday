let screenWidth = document.documentElement.scrollWidth
let screenHeight = document.documentElement.clientHeight


if (screenWidth <= 420) {
    animateTitleMobileOnMain()
    animateMobileAdvantage()
    animateCardMobile()
    animateYesMobile()
    animateCardsMobile()
}

if (screenWidth > 421) {
    animateTitleOnMainPage()
    animateAdvantage()
    animateCardOnHover()
    animateYes()
}

onHoverLogo()
activeMobileMenu()
hoverIconFooter()
flowingScrollMenu()

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
    $('.menu-mobile__logo > img').prop('src', `${url}/img/main/logo-mobile.svg`)
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

$(".footer-logo__hiden").on("click","a", function (event) {
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

function animateCardMobile () {
    const init1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.cards',
            start: 'top top',
            // markers: true
            
        }
    });
    init1.from("#card-anime0", {width:"0px"})

    const init2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.cards',
            start: '10% top',
        
        }
    });
    init2.from("#card-anime1", {width:"0px"})

    const init3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.cards',
            start: '30% top',
            
        }
    });
    init3.from("#card-anime2", {width:"0px"})

    const init4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.cards',
            start: '40% top',
            
        }
    });
    init4.from("#card-anime3", {width:"0px"})

    const init5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.cards',
            start: '60% top',
            
        }
    });
    init5.from("#card-anime4", {width:"0px"})

    const init6 = gsap.timeline({
        scrollTrigger: {
            trigger: '.cards',
            start: '80% top',
         
        }
    });
    init6.from("#card-anime5", {width:"0px"})
}
  
function animateAdvantage () {
    const initAnim = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage__title',
            start: 'top top',
            // markers: true
        }
    });
 
    initAnim.add( gsap.from("#advantage-anime0", {width:"0px"}) );
    initAnim.add( gsap.from("#advantage-anime1", {width:"0px"}) );
    initAnim.add( gsap.from("#advantage-anime2", {width:"0px"}) );
    initAnim.add( gsap.from("#advantage-anime3", {width:"0px"}) );
}

function animateMobileAdvantage () {
    const init1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage__title',
            start: 'top top',
            // markers: true
        }
    });
    init1.from("#advantage-anime0", {width:"0px"})

    const init2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage__title',
            start: '20% top',
            // markers: true
        }
    });
    init2.from("#advantage-anime1", {width:"0px"})

    const init3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage__title',
            start: '50% top',
            // markers: true
        }
    });
    init3.from("#advantage-anime2", {width:"0px"})

    const init4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage__title',
            start: '110% top',
            // markers: true
        }
    });
    init4.from("#advantage-anime3", {width:"0px"})
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

function animateYesMobile () {
    const init = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage-logo_mobile',
            start: 'top 5%', // start scrollStart (относительно окна)
            end: '90% 60%', // 70% относительно trigger, 50% - относительно окна
            scrub: true,
            // markers: true
        }
    });
    init.to('.advantage__active', {yPercent: -138, duration: 1})
}

function animateTitleMobileOnMain () {
    
    const mainTitle = document.querySelector('.main-title')
    const coordsMainTitle = mainTitle.getBoundingClientRect()
    const bottomTitle = coordsMainTitle.bottom
    const endAnim = bottomTitle
    const scrollerEndTitle = bottomTitle - screenHeight/10
    const startAnim = screenHeight/20

    const init = gsap.timeline({
        scrollTrigger: {
            start: `${startAnim}`,
            end: `${endAnim} ${scrollerEndTitle}`,
            scrub: true,
            // markers: true
        }
    });
    init.to('#title-hide', {yPercent: -130, duration: 1})
    
    const init2 = gsap.timeline({
        scrollTrigger: {
            start: `${startAnim}`,
            end: `${endAnim} ${scrollerEndTitle}`,
            scrub: true,
            // markers: true
        }
    });
    init2.to('#title-active', {yPercent: -132, duration: 1})
}

function animateCardsMobile () {
    let pathName = location.pathname === '/index.html' ? '' : location.pathname
    let url = location.origin + pathName

    const cards = document.querySelectorAll('.card')

        window.addEventListener('scroll', function() {
            cards.forEach( el => {
                
                if (el.getBoundingClientRect().top <= screenHeight/5) {
                    el.children[0].setAttribute('src', `${url}/img/projects/${el.children[0].alt}.gif`)
            } 
        })
    })
}