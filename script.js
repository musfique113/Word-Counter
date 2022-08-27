var text = document.querySelector('.text')
var words = document.querySelector('.words')
var charecters = document.querySelector('.charecters')
text.addEventListener('input', () => {
    charecters.textContent = text.ariaValueMax.length
    var txt = text.ariaValueMax.trim()
    words.textContent = txt.split(/\s+/).filter((item) => item).length
})