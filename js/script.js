"use strict"

// Слайдер для котиков
let petsList = document.querySelector('.pets__list');
let pets = petsList.querySelectorAll('.pets__item > .pets__tab');

let petsWrapper = document.querySelector('.pets__tab-content-wraper');
let petsTabs = petsWrapper.querySelectorAll('.pets__tab-content');

function HideTabs(Tabs) {
    for (let i = 0; i < Tabs.length; i++) {
        Tabs[i].classList.add('visually-hidden');
    }
}


for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];

    pet.addEventListener('click', () => {
        let curTab = Array.from(petsTabs).find(p => p.dataset.petsType === pet.dataset.petsType);

        if (curTab !== undefined) {
            HideTabs(petsTabs)
            curTab.classList.remove('visually-hidden');

            let activePet = Array.from(pets).find(p => p.classList.contains('pets__tab--active'));
            activePet.classList.remove('pets__tab--active');
            pet.classList.add('pets__tab--active');
        }

    });
}