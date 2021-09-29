const photoIndex = {};

for (const photoSet of document.getElementsByClassName("image")) {
    photoIndex[photoSet.className] = {
        index: 0,
        photos: photoSet.children
    };

    for (let i = 1; i < photoSet.children.length; ++i) {
        photoSet.children[i].style.display = 'none';
    }
}
