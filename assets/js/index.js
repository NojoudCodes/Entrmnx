document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.featured-new.splide', {
    type: 'loop',
		perPage    : 4.5,
  } ).mount();
  new Splide( '.featured-shows.splide', {
    type: 'loop',
		perPage    : 4.5,
  } ).mount();
  new Splide( '.featured-movies.splide', {
    type: 'loop',
		perPage    : 4.5,
  } ).mount();
} );