import { createTemplateForGallery } from './template';

export function startGallery(settingsObj) {
    
    const containerGallery = document.querySelector('.gallery-wrapper');
    let htmlGallery = '';

    settingsObj.forEach(element => {
        htmlGallery += createTemplateForGallery(element.type, element.path, element.name);
    });

    containerGallery.insertAdjacentHTML('afterbegin', htmlGallery)
    
}