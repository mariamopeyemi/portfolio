const btn = document.querySelector('.annoy-btn');
const body = document.querySelector('#body');

btn.addEventListener('mouseover', setTimeout(function() {
    console.log('YOU MOUSED OVER ME!');

    const height = Math.floor (Math.random() *window.innerHeight);
    const width = Math.floor (Math.random() *window.innerWidth);

    const r= Math.floor(Math.random()*256);
    const g= Math.floor(Math.random()*256);
    const b= Math.floor(Math.random()*256);
    const color = `rgb(${r},${g},${b})`;
   
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
    console.log(body);
    // body.style.backgroundColor= color;
    body.style.backgroundColor= color;
}, 2000));