function moveImage(position) {
    const image = document.getElementById('image');
    const box = document.querySelector('.box');
    const boxWidth = box.clientWidth;
    const boxHeight = box.clientHeight;
    const imgSize = 60;

    let positions = {
        'left top': { left: '0px', top: '0px' },
        'left center': { left: '0px', top: `${(boxHeight - imgSize) / 2}px` },
        'left bottom': { left: '0px', top: `${boxHeight - imgSize}px` },
        'right top': { left: `${boxWidth - imgSize}px`, top: '0px' },
        'right center': { left: `${boxWidth - imgSize}px`, top: `${(boxHeight - imgSize) / 2}px` },
        'right bottom': { left: `${boxWidth - imgSize}px`, top: `${boxHeight - imgSize}px` },
        'center top': { left: `${(boxWidth - imgSize) / 2}px`, top: '0px' },
        'center center': { left: `${(boxWidth - imgSize) / 2}px`, top: `${(boxHeight - imgSize) / 2}px` },
        'center bottom': { left: `${(boxWidth - imgSize) / 2}px`, top: `${boxHeight - imgSize}px` },
        'custom': { left: '100px', top: '100px' }
    };

    image.style.left = positions[position].left;
    image.style.top = positions[position].top;
}