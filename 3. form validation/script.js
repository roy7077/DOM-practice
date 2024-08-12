
var sbmt=document.querySelector('button');
var inps=document.querySelectorAll('input[type="text"]');
var h3=document.querySelector('h3');

sbmt.addEventListener('click',(e)=>{
    e.preventDefault();
    let flag=0;
    inps.forEach((ele)=>{
        if(ele.value.trim()==='')
        flag=1;
    })

    if(flag===1)
    {
        h3.textContent="error";
        h3.style.color='red';
    }
    else
    h3.textContent="";
})