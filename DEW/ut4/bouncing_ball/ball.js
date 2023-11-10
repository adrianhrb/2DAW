// Canvas set-up

let canvas = document.getElementsByTagName('canvas')[0];
let ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function random(min, max) {
    return Math.floor(Maht.random() * (max-min+1)) + min;
}