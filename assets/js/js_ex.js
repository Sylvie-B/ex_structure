
let appElem = document.getElementById('app-root');

if(appElem) {
    startApp(appElem);
}

function startApp(parent){
    let subElem = document.createElement('span');
    subElem.style.backgroundColor = 'blue';
    subElem.style.color = 'white';
    subElem.style.width = '80%';
    subElem.style.height = '20vh';
    subElem.style.display = 'inline-block';
    subElem.innerHTML = 'Hello world';
    parent.appendChild(subElem);
}

document.getElementById('theme-button').addEventListener('click', function(e){
    let theme = window.localStorage.getItem('theme');
    console.log("debut : " + theme);

    theme = (theme !== 'light') ? 'light' : 'dark';
    let style = document.querySelector('link');
    style.href = "./assets/css/" + theme + ".css";
    window.localStorage.setItem('theme', theme);
})
