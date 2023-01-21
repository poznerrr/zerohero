const caruselPhoto = document.querySelector('.carusel__photo');
caruselPhoto.style.backgroundImage = 'url(./assets/1.png)';
let currentPhoto = 1;
let maxPhoto = 3;

const nextBtn = document.querySelector('.carusel__next');
const prevBtn = document.querySelector('.carusel__prev');

nextBtn.addEventListener('click', () => {
  if (currentPhoto === maxPhoto) {
    currentPhoto = 1;
  } else {
    currentPhoto += 1;
  }
  caruselPhoto.style.backgroundImage = `url(./assets/${currentPhoto}.png)`;
});

prevBtn.addEventListener('click', () => {
  if (currentPhoto === 1) {
    currentPhoto = maxPhoto;
  } else {
    currentPhoto -= 1;
  }
  caruselPhoto.style.backgroundImage = `url(./assets/${currentPhoto}.png)`;
});
