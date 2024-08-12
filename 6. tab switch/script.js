var btns=document.querySelectorAll('button');
var h=document.querySelectorAll('h1');

// console.log(btns)
// console.log(h)

btns.forEach((div,index)=>{
    div.addEventListener('click',()=>{
        disableAll();
        h[index].style.display="block";
        h[index].style.width="50%";
    })
})

var disableAll=()=>{
    h.forEach((h1)=>{
        h1.style.display="none";
    })
}