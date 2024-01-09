const htmlElement = document.documentElement;
const darkModeSwitchElement = document.querySelector('#toggleDarkMode');

if (localStorage.getItem('mode') === 'dark') {
  htmlElement.classList.add('dark');
  darkModeSwitchElement.checked = true;
}

const darkModeHandle = () => {
  darkModeSwitchElement.addEventListener('input', () => {
    htmlElement.classList.toggle('dark');
    htmlElement.classList.contains('dark')
      ? localStorage.setItem('mode', 'dark')
      : localStorage.setItem('mode', 'light');
  });
};

export { darkModeHandle };
