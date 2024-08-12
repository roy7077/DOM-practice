var h2=document.querySelector('h2');
var progress=document.querySelector('#progress');
var btn=document.querySelector('button');

let cnt=0;
btn.addEventListener('click',()=>{
    btn.style.display='none';
    var int=setInterval(()=>{
        cnt++;
        if(cnt>100)
        {
            clearInterval(int);
            h2.style.opacity=1;
        }

        progress.style.width=cnt+'%';
    },10)

})
