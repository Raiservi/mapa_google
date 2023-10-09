/*Creem el mapa base*/

var mapaPosicioActual = L.map("mapa2").setView([41.409919, 2.226921], 10);

/* Capa base satelit*/

L.tileLayer(
  "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
  {
    maxZoom: 18,
  }
).addTo(mapaPosicioActual);
