var img1 = document.querySelector('img:nth-of-type(1)');
var img2 = document.querySelector('img:nth-of-type(2)');
var btn = document.querySelector('button');

btn.addEventListener('click', () => {
    //console.log("hello");
    let temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
});
