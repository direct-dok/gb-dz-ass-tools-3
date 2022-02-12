export function createTemplateForGallery(type, src, name) {

    const typeTemplate = {
        img: `
            <img src="${src}">
        `,
        video: `
            <video width="200" height="130" controls="controls">
                <source src="${src}">
            </video>
        `,
        audio: `
            <audio
                controls
                src="${src}"
            >
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        `
    };

    return `
        <li class="gallery-item">
            <div class="gallery-wrapper-media">
                ${ typeTemplate[type] }
            </div>
            <p class="gallery-name">${name}</p>
        <li>
    `;
}