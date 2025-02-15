'use strict';

const switcher = document.querySelector('.btn');

// Verificar se o botão existe no DOM antes de adicionar o event listener
if (switcher) {
    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            this.textContent = "Light";
        } else {
            this.textContent = "Dark";
        }
    });
}

    
    