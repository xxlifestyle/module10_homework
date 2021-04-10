let emptyArrowSvg = document.querySelector('.svg1')
let fillArrowSvg = document.querySelector('.svg2')

let btn = document.querySelector('.btn')

let isArrowChanged = false


btn.addEventListener('click', () => {
	if (isArrowChanged) {
        emptyArrowSvg.style.display = "none";
        fillArrowSvg.style.display = "inline";
    } else {
        emptyArrowSvg.style.display = "inline";
        fillArrowSvg.style.display = "none";
    }
	isArrowChanged = !isArrowChanged;
})
console.log(isArrowChanged)