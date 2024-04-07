let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');
let showCode = document.getElementById('showCode');

let rgb1 = "#c84c4c";
let rgb2 = "#29ae5a";

const hexvalue = () =>{
    let hexa = '0123456789abcdef'
    let colors = "#"
    for(let i = 0; i < 6; i++){
       colors = colors + hexa[Math.floor(Math.random() * 16)];
    }
    return colors;
}

const handleButton1 = () => {
    rgb1 = hexvalue();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2} )`;
    showCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2} )`;
    leftBtn.innerHTML = `${rgb1}`;
};

const handleButton2 = () => {
    rgb2 = hexvalue();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    showCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    rightBtn.innerHTML = `${rgb2}`;
};

showCode.addEventListener('click',() => {
    navigator.clipboard.writeText(showCode.innerText);
    alert(`Copied:\n${showCode.innerText}`)
})

leftBtn.addEventListener('click',handleButton1);
rightBtn.addEventListener('click',handleButton2);