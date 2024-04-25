  // Ellenőrzi, hogy a modális ablak nyitva van-e
  function isModalOpen() {
    return document.querySelector('.modal.show') !== null;
  }

  // Megakadályozza a carousel további görgetését, ha a modális ablak nyitva van
  document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.getElementById('carouselExampleControls');

    carousel.addEventListener('slide.bs.carousel', function(event) {
      if (isModalOpen()) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  });