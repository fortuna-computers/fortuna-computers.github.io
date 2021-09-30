// TODO - make arrows work (ok)
// TODO - arrows in mobile
// TODO - show image in full screen
// TODO - publish and calculate lighthouse

const photoIndex = {};

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

for (const block of document.getElementsByClassName('block')) {
    const id = block.id;

    photoIndex[id] = {
        index: 0,
        photos: block.getElementsByClassName('image').item(0).children,
        arrowLeft: block.getElementsByClassName('arrow-left').item(0),
        arrowRight: block.getElementsByClassName('arrow-right').item(0),
    };

    if (photoIndex[id].arrowRight) {
        photoIndex[id].arrowRight.style.display = 'block';
        photoIndex[id].arrowRight.addEventListener('click', () => onClickRight(id));
    }

    if (photoIndex[id].arrowLeft)
        photoIndex[id].arrowLeft.addEventListener('click', () => onClickLeft(id));
}

console.log(photoIndex);
