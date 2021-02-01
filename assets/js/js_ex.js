
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

document.getElementById('theme-button').addEventListener('click', getTheme);

function getTheme() {
    let theme = window.localStorage.getItem('theme');
    theme = (theme !== 'dark') ? 'dark' : 'ligth';
    let style = document.querySelector('link');
    style.href = "./assets/css/" + theme + ".css";
    window.localStorage.setItem('theme', theme);
}
if(["dark", "light"].includes(window.localStorage.getItem('theme'))) {
    getTheme(false);
}
getTheme();
