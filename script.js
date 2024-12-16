let left =  document.querySelector('.left');
let leftRight =  document.querySelector('.leftRight');
let leftRightEnd =  document.querySelector('.leftRightEnd');
let leftLeft =  document.querySelector('.leftLeft');
let leftLeftEnd =  document.querySelector('.leftLeftEnd');
let leftButton = document.querySelector('.leftButton');

let right =  document.querySelector('.right');
let rightRight =  document.querySelector('.rightRight');
let rightRightEnd =  document.querySelector('.rightRightEnd');
let rightLeft =  document.querySelector('.rightLeft');
let rightLeftEnd =  document.querySelector('.rightLeftEnd');
let rightButton = document.querySelector('.rightButton');

let text =  document.querySelector('.text');
let Alley =  document.querySelector('.left');

leftLeft.style.display = "none";
leftLeftEnd.style.display = "none";
leftRight.style.display = "none";
leftRightEnd.style.display = "none";
rightRight.style.display = "none";
rightRightEnd.style.display = "none";
rightLeft.style.display = "none";
rightLeftEnd.style.display = "none";

leftButton.addEventListener('click', function(){
    leftLeft.style.display = "block";
    leftRight.style.display = "block";
    left.style.display = "none";
    right.style.display = "none";
    rightButton.style.display = "none";
    leftButton.style.display = "none";
    text.innerHTML = "you see a homeless man as youre walking home he ask for some money will you give him a coin or leave him alone (double click the image)";
});

rightButton.addEventListener('click', function(){
    rightRight.style.display = "block";
    rightLeft.style.display = "block";
    left.style.display = "none";
    right.style.display = "none";
    rightButton.style.display = "none";
    leftButton.style.display = "none";
    text.innerHTML = "some thugs gang up on you what will you do use the mystery tool or try to fight back and protext yourself (click the image)";
});

rightRight.addEventListener('click', function(){
    rightRight.style.display = 'none';
    rightLeft.style.display = 'none';
    rightRightEnd.style.display = 'block';
    text.innerHTML = "u decided to up the toolie on these fools andgot to blasting you made it home safely and won"
});

rightLeft.addEventListener('click', function(){
    rightRight.style.display = 'none';
    rightLeft.style.display = 'none';
    rightLeftEnd.style.display = 'block';
    text.innerHTML = "welp you got beat and smacked up they took all your money and now your nothing but ashamed its sad but you lose";
    });

leftLeft.addEventListener('dblclick', function(){
    leftLeft.style.display = 'none';
    leftRight.style.display = 'none';
    leftLeftEnd.style.display = 'block';
    text.innerHTML = "you did a good deed he was a crack head and could of hurt you, but you made it home safe and won";
    });

leftRight.addEventListener('dblclick', function(){
    leftLeft.style.display = 'none';
    leftRight.style.display = 'none';
    leftRightEnd.style.display = 'block';
    text.innerHTML = "uh oh he got mad he wants money for his crack it seems ge has a toolie, you died and lost";
    });