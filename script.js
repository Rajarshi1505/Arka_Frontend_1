mapboxgl.accessToken = 'pk.eyJ1IjoicmFqYXJzaGkxNTA1IiwiYSI6ImNrc2Z5ajF0MjFlejgycW9kYWh4cjJxZmIifQ.5Xw7KCe9x_bcbrAreRZyAg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [86.4412,23.8143],
    zoom: 12
});

map.addControl(new mapboxgl.NavigationControl());