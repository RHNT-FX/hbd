const kalimat = document.querySelectorAll('.kalimat');
const nextButton = document.getElementById('nextButton');
const stiker = document.getElementById('stiker'); 
let currentKalimat = 0;

// Array berisi path ke gambar stiker WebP
const stikerArray = [
  "stiker1.webp",
  "stiker2.webp",
  "stiker3.webp",
  "stiker4.webp",
  "stiker5.webp",
  "stiker6.webp",
  "stiker7.webp",
  "stiker8.webp",
  "stiker9.webp",
  "stiker10.webp",
  "stiker11.webp",
  // ... tambahkan path ke stiker WebP lainnya
];

function showKalimat(index) {
  kalimat.forEach(k => k.classList.remove('active'));
  kalimat[index].classList.add('active');

  // Ganti stiker dengan animasi smooth dan posisi random
  stiker.classList.remove('active');
  setTimeout(() => {
    stiker.src = stikerArray[index % stikerArray.length]; 
    stiker.classList.add('active');

    // Generate posisi acak (dengan batas)
    const containerWidth = document.querySelector('.container').offsetWidth;
    const containerHeight = document.querySelector('.container').offsetHeight;
    const stikerWidth = stiker.offsetWidth;
    const stikerHeight = stiker.offsetHeight;
    const maxX = containerWidth - stikerWidth;
    const maxY = containerHeight - stikerHeight;
    const left = Math.max(0, Math.random() * maxX); // Batasi agar tidak negatif
    const top = Math.max(0, Math.random() * maxY); // Batasi agar tidak negatif

    // Atur posisi stiker
    stiker.style.left = `${left}px`;
    stiker.style.top = `${top}px`;
  }, 100); 
}

nextButton.addEventListener('click', () => {
  currentKalimat++;
  if (currentKalimat >= kalimat.length) {
    // Alihkan ke galeri.html setelah kalimat terakhir 
    window.location.href = "galeri.html"; 
  } else {
    showKalimat(currentKalimat);
  }
});

// Tampilkan kalimat pertama di awal
showKalimat(currentKalimat);