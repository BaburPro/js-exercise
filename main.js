let button = document.querySelector('.btn');
let all = document.querySelector('.all');
let center = document.querySelector('.center');
let head = document.querySelector('.head');
let box = document.querySelector('.box');
let middle = document.querySelector('.middle');
let box_btn = document.querySelector('.box-btn');

button.addEventListener('click', function(){
    button.textContent = "Different";
    head.textContent = "Page design and text were changed";
    all.classList.toggle('all-new');
    button.classList.toggle('btn-new');
    center.classList.toggle('center-new');
    head.classList.toggle('head-new');
    box.classList.toggle('box-new');
    middle.classList.toggle('middle-new');
    box_btn.classList.toggle('box-btn-new');
});

box_btn.addEventListener('click', function(){
    center.classList.toggle('center-newx2');
    head.textContent = "WOW";
    box_btn.classList.toggle('box-btnx2');
});