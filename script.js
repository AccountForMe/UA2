function toggleMenu() {
    var menu = document.querySelector('.menu-container');
    if (menu.style.right === '-300px') {
        menu.style.right = '0';
    } else {
        menu.style.right = '-300px';
    }
}
