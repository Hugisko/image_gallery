
const imageContainer = document.querySelector('.image-container');
let angle = 0;

document.querySelector('#prev').addEventListener('click', () => {
  angle += 45;
  imageContainer.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
});

document.querySelector('#next').addEventListener('click', () => {
  angle -= 45;
  imageContainer.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
});