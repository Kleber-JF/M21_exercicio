document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const menuButton = document.getElementById('botao-menu');
    
    menuButton.addEventListener('click', openCloseMenu);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button){
            const tabsTarget = button.target.dataset.tabButton;
            const tabMovies = document.querySelector(`[data-movies-tab-id=${tabsTarget}]`);
            const tabCharacters = document.querySelector(`[data-characters-tab-id=${tabsTarget}]`);
            hideAllTabs();
            tabMovies.classList.add('list--is-active');
            tabCharacters.classList.add('list--is-active');
            removeActiveButton();
            button.target.classList.add('movies__tabs__button--is-active');
        })
    }
})

function hideAllTabs() {
    const tabsContainerMovies = document.querySelectorAll('[data-movies-tab-id]');
    const tabsContainerCharacters = document.querySelectorAll('[data-characters-tab-id]');

    for (let i = 0; i < tabsContainerMovies.length; i++) {
        tabsContainerMovies[i].classList.remove('list--is-active');
    }

    for (let i = 0; i < tabsContainerCharacters.length; i++) {
        tabsContainerCharacters[i].classList.remove('list--is-active');
    }
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('movies__tabs__button--is-active');
    }
}

function openCloseMenu() {
    const menuList = document.getElementById('menu');
    menuList.classList.toggle('--is-closed');
}