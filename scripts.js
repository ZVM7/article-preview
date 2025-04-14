const icon = document.querySelector('.share');
const popup = document.getElementById('Popup');

icon.addEventListener('click', () => {
icon.style.backgroundColor='hsl(217, 19%, 35%)';
if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
});
