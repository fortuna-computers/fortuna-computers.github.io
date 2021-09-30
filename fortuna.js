// TODO - make arrows work (ok)
// TODO - improve arrow appearance (ok)
// TODO - arrows in mobile (ok)
// TODO - show image in full screen (ok)
// TODO - publish and calculate lighthouse

const photoIndex = {};
const fullImage = document.getElementById('full-image');
const fullImageBackground = document.getElementById('full-image-background');

function hideFullImage() {
    if (fullImage.style.display === 'block') {
        fullImage.style.display = 'none';
        fullImageBackground.style.display = 'none';
    }
}

fullImage.addEventListener('click', hideFullImage);
fullImageBackground.addEventListener('click', hideFullImage);

function onClickRight(id) {
    const p = photoIndex[id];

    p.photos.item(p.index).style.display = 'none';
    ++p.index;
    p.photos.item(p.index).style.display = 'block';

    if (p.index > 0)
        p.arrowLeft.style.display = 'block';
    if (p.index === p.photos.length - 1)
        p.arrowRight.style.display = 'none';
}

function onClickLeft(id) {
    const p = photoIndex[id];

    p.photos.item(p.index).style.display = 'none';
    --p.index;
    p.photos.item(p.index).style.display = 'block';

    if (p.index < p.photos.length - 1)
        p.arrowRight.style.display = 'block';
    if (p.index === 0)
        p.arrowLeft.style.display = 'none';
}

function onClickPhoto(photo) {
    fullImage.src = photo.src;
    fullImage.style.display = 'block';
    fullImageBackground.style.display = 'block';
}

for (const block of document.getElementsByClassName('block')) {
    const id = block.id;

    photoIndex[id] = {
        index: 0,
        photos: block.getElementsByClassName('image').item(0).children,
        arrowLeft: block.getElementsByClassName('arrow-left').item(0),
        arrowRight: block.getElementsByClassName('arrow-right').item(0),
    };

    for (const photo of photoIndex[id].photos) {
        photo.addEventListener('click', () => onClickPhoto(photo));
    }

    if (photoIndex[id].arrowRight && photoIndex[id].photos.length > 1) {
        photoIndex[id].arrowRight.style.display = 'block';
        photoIndex[id].arrowRight.addEventListener('click', () => onClickRight(id));
    }

    if (photoIndex[id].arrowLeft)
        photoIndex[id].arrowLeft.addEventListener('click', () => onClickLeft(id));
}
