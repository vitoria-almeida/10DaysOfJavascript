var images = [
    "./imgs/dog (1).jpg",
    "./imgs/dog (2).jpg",
    "./imgs/dog (3).jpg",
    "./imgs/dog (4).jpg",
    "./imgs/dog (5).jpg",
    "./imgs/dog (6).jpg",
    "./imgs/dog (7).jpg",
    "./imgs/dog (8).jpg",
    "./imgs/dog (9).jpg",
    "./imgs/dog (10).jpg",   
]

var num = 0

function next() {
    var slider = document.getElementById("slider")
    num ++
    if (num >= images.length) {
        num = 0       
    }
    slider.src = images[num]
}

function prev() {
    var slider = document.getElementById("slider")
	    num--
	    if(num < 0) {
	        num = images.length-1
	    }
	    slider.src = images[num]
}

