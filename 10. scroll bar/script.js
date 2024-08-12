// script.js
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    const progressBar = document.querySelector('#progress-bar');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    console.log(scrolled);
    progressBar.style.width = scrolled + "%";
}

// console.log('helo')
