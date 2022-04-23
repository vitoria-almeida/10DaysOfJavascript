let loadMore = document.querySelector('#loadButton')
let currentItem = 3;

loadMore.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .content')]
    for (var i = currentItem; i < currentItem+3; i++) {
        boxes[i].style.display = 'inline-block'
    }
    currentItem += 3

    if(currentItem >= boxes.length) {
        loadMore.style.display = 'none'
    }
}

