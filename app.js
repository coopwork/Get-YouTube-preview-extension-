const preview_URL = document.querySelector('link[rel="image_src"]').getAttribute('href');
window.open(preview_URL);
console.log(document.querySelector('link[rel="image_src"]').getAttribute('href'));