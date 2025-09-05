'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const bigPicture = document.getElementById('largeImg');
  const smallPicture = document.getElementById('thumbs');

  smallPicture.addEventListener('click', (ev) => {
    ev.preventDefault();

    const link = ev.target.closest('a');

    if (!link) {
      return;
    }
    bigPicture.src = link;
    bigPicture.alt = link.title || 'main image';
  });
});
