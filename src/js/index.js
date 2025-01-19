console.log('javascript ready...')

const showMobileNav = () => {
    var navbar = document.getElementById("navbar");
    navbar.className === "navibar" ? navbar.className += " responsive" : navbar.className = "navibar"
}