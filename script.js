// Lista de 13 imagens locais (dentro da pasta "img")
const images = [
  'img/foto1.jpg',
  'img/foto2.jpg',
  'img/foto5.jpg',
  'img/foto4.jpg',
  'img/foto3.jpg',
  'img/foto6.jpg',
  'img/foto7.jpg',
  'img/foto8.jpg',
  'img/foto9.jpg',
  'img/foto10.jpg',
  'img/foto11.jpg',
  'img/foto12.webp',
  'img/foto13.jpg',
];

// Elemento da galeria
const gallery = document.getElementById('gallery');

// Elemento dos balões animados
const balloonsContainer = document.querySelector('.floating-balloons');

// Carrega as imagens na galeria
function loadImages() {
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Imagem de festa';
    img.loading = 'lazy';
    gallery.appendChild(img);
  });
}

// Cria balões animados
function createBalloons() {
  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${10 + Math.random() * 10}s`;
    balloon.style.opacity = Math.random();
    balloonsContainer.appendChild(balloon);
  }
}

// Inicialização ao carregar a página
window.onload = function () {
  loadImages();
  createBalloons();
};

