function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    
    var RGB = "rgb("+ r + "," + g + "," + b + ")"

    document.body.style.backgroundColor = RGB
    document.querySelector('p').innerHTML = RGB
}


