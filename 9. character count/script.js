
var textarea=document.querySelector('textarea');
var span=document.querySelector('span');

textarea.addEventListener('input',()=>{
    span.textContent=textarea.value.length;
})