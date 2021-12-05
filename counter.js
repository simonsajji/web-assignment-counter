let text=document.getElementById('count');

let add = document.getElementById('increase');
let sub = document.getElementById('decrease');

 let count = 0;
add.addEventListener('click', () => {
     count++;
     text.innerHTML = count;
 })

sub.addEventListener('click', () => {
     count--;
     text.innerHTML = count;
 })