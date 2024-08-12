
var para = document.querySelector('p');
var btn = document.querySelector('button');

btn.addEventListener('click', () => {
    para.className = 'clickClass';
});

btn.addEventListener('dblclick', () => {
    console.log(para.className);
    
    if (para.className === 'clickClass') {
        para.className = 'clickClass2';
    }
});