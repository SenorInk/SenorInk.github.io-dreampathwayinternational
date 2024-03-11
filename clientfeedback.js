
let sliderCanada = document.querySelector('.slider .list');
let itemsCanada = document.querySelectorAll('.slider .list .item');
let nextCanada = document.getElementById('nextCanada');
let prevCanada = document.getElementById('prevCanada');
let dotsCanada = document.querySelectorAll('.slider .dots li');

let sliderAustralia = document.querySelector('.sliders .lists');
let itemsAustralia = document.querySelectorAll('.sliders .lists .item');
let nextAustralia = document.getElementById('nextAustralia');
let prevAustralia = document.getElementById('prevAustralia');
let dotsAustralia = document.querySelectorAll('.sliders .dotss li');

let lengthItemsCanada = itemsCanada.length - 1;
let activeCanada = 0;
let lengthItemsAustralia = itemsAustralia.length - 1;
let activeAustralia = 0;

nextCanada.onclick = function(){
    activeCanada = activeCanada + 1 <= lengthItemsCanada ? activeCanada + 1 : 0;
    reloadSliderCanada();
}
prevCanada.onclick = function(){
    activeCanada = activeCanada - 1 >= 0 ? activeCanada - 1 : lengthItemsCanada;
    reloadSliderCanada();
}

nextAustralia.onclick = function(){
    activeAustralia = activeAustralia + 1 <= lengthItemsAustralia ? activeAustralia + 1 : 0;
    reloadSliderAustralia();
}
prevAustralia.onclick = function(){
    activeAustralia = activeAustralia - 1 >= 0 ? activeAustralia - 1 : lengthItemsAustralia;
    reloadSliderAustralia();
}

let refreshIntervalCanada = setInterval(()=> {nextCanada.click()}, 3000);
let refreshIntervalAustralia = setInterval(()=> {nextAustralia.click()}, 3000);

function reloadSliderCanada(){
    sliderCanada.style.left = -itemsCanada[activeCanada].offsetLeft + 'px';
    let lastActiveDotCanada = document.querySelector('.slider .dots li.active');
    lastActiveDotCanada.classList.remove('active');
    dotsCanada[activeCanada].classList.add('active');

    clearInterval(refreshIntervalCanada);
    refreshIntervalCanada = setInterval(()=> {nextCanada.click()}, 5000);
}

function reloadSliderAustralia(){
    sliderAustralia.style.left = -itemsAustralia[activeAustralia].offsetLeft + 'px';
    let lastActiveDotAustralia = document.querySelector('.sliders .dotss li.actives');
    lastActiveDotAustralia.classList.remove('actives');
    dotsAustralia[activeAustralia].classList.add('actives');

    clearInterval(refreshIntervalAustralia);
    refreshIntervalAustralia = setInterval(()=> {nextAustralia.click()}, 5000);
}

dotsCanada.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         activeCanada = key;
         reloadSliderCanada();
    })
})

dotsAustralia.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         activeAustralia = key;
         reloadSliderAustralia();
    })
})

window.onresize = function(event) {
    reloadSliderCanada();
    reloadSliderAustralia();
};
