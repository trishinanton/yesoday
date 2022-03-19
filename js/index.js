// hover on logo
onHoverLogo()

function onHoverLogo () {
    let logoContainer = document.querySelector('.menu__logo')

    logoContainer.addEventListener('mouseover', function() {
        this.children[0].setAttribute('src', '{{ site.baseurl }}/img/main/logo-active.png'); 
        this.children[0].style.height = '61px'
        this.classList.add('menu__logo_active')
    })

    logoContainer.addEventListener('mouseout', function() {
        this.children[0].setAttribute('src', '{{ site.baseurl }}/img/main/logo.png');
        this.classList.remove('menu__logo_active');
        this.children[0].style.height = ''
    })
}



