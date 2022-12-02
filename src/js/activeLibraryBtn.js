import { getElement } from "./getElement";

export function activeLibraryBtn() {
    getElement(".header__libraryListBunnon").addEventListener('click', onClick);
}

function onClick(event) {
    if (event.target.disabled) {
        return;
    }

    const className = "header__libraryButton--isActive"

    if (getElement(`.${className}`)) {
        getElement(`.${className}`).disabled = false;
        getElement(`.${className}`).classList.toggle(className);
    };
        
    event.target.disabled = true;
    event.target.classList.add(className);
}