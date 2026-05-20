
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior:'smooth' });
  });
});

const watchButtons = document.querySelectorAll('.card-content button');

watchButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Movie page coming soon on DeeMovies!');
  });
});
