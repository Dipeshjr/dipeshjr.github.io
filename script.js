// store the colors
const colors = {
    dark: { background: 'black', text: 'white' },
    light: { background: 'white', text: 'black' }
};

//function
function changeColor(theme) {
    document.body.style.backgroundColor = colors[theme].background;
    document.body.style.color = colors[theme].text;
}

document.getElementById('dark').onclick = () => changeColor('dark');
document.getElementById('light').onclick = () => changeColor('light');
document.getElementById('default').onclick =() => changeColor('light');