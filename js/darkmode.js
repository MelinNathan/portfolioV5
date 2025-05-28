const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const greenButton = document.getElementById('green');

const body = document.body;


//Aplly the cached them on reload

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.remove('green');
  body.classList.remove('light');
  body.classList.remove('dark');
  body.classList.add(theme);
}

//Button event handlers:


darkButton.onclick = () => {
  body.classList.remove('green');
  body.classList.remove('light');
  body.classList.add('dark')
  localStorage.setItem('theme', 'dark');
}
lightButton.onclick = () => {
  body.classList.remove('dark');
  body.classList.remove('green');
  body.classList.add('light')
  localStorage.setItem('theme', 'light');
}
greenButton.onclick = () => {
  body.classList.remove('dark');
  body.classList.remove('light');
  body.classList.add('green')
  localStorage.setItem('theme', 'green');
}
