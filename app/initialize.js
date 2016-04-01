document.addEventListener('DOMContentLoaded', () => {
  inlineSVG.init();
  window.initMap = () => {
  let cairo, map;
  cairo = {
    lat: 55.745569,
    lng: 37.662330
  };
   map = new google.maps.Map(document.getElementById('map'), {
    scaleControl: true,
    center: cairo,
    zoom: 16
  });
    map.setOptions({
    scrollwheel: false
  });
};
  console.log('Initialized app');
});
