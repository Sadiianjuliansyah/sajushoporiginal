document.querySelectorAll('.product-card').forEach((card) => {
  const mainImg = card.querySelector('.main-img');
  const thumbs = card.querySelectorAll('.thumbs img');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // reset semua thumbnail
      thumbs.forEach(t => t.classList.remove('active'));
      // aktifkan yang diklik
      thumb.classList.add('active');
      // ganti foto utama
      mainImg.src = thumb.dataset.large;
    });
  });
});
