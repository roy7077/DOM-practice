var counter=document.querySelector('.counter');
var btns=document.querySelectorAll('button');
var h1=document.querySelector('h1');

let cnt=0;
var tt;
btns[0].addEventListener('click',()=>{
    tt=setInterval(()=>{
        cnt++;
        h1.textContent=cnt;
    },1000);
})

btns[1].addEventListener('click',()=>{
    clearInterval(tt);
})

btns[2].addEventListener('click',()=>{
    clearInterval(tt);
    h1.textContent=0;
    cnt=0;
})

console.log('hello')