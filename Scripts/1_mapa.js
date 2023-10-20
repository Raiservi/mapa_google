
/*Creem el mapa base*/

 var mapa_piscines = L.map("mapa1").setView([41.40869899, 2.2263300418853764], 17);

        /* Capa base satelit*/


        L.tileLayer(
          "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
          {
            maxZoom: 18,
          }
        ).addTo(mapa_piscines);

        /* Capa base open street*/

        /* Control de  capa base/
      
      
      
      
      
      /*Paleta de colors capa habitats*=======================*/

        function getColor1(Tipus_habi) {
          return Tipus_habi == "Fons de  llim"
            ? "#800080"
            : Tipus_habi == "Parets de ciment"
            ? "##FFFFFF"
            : Tipus_habi == "Area de grans roques"
            ? "##008000"
            : Tipus_habi == "Base de ciment amb sorra"
            ? "#FEB24C"
            : Tipus_habi == "Escales ciment"
            ? "#FED976"
            : Tipus_habi == "Columnes de ciment"
            ? "#FFEDA"
            : "#FFDDA0";
        }

        function style1(feature) {
          return {
            fillColor: getColor1(feature.properties.Tipus_habi),
            weight: 2,
            opacity: 0.3,
            color: "black",
            dashArray: "3",
            fillOpacity: 0.7,
          };
        }


        function popup(feature, layer) {
          if (feature.properties && feature.properties.Tipus_habi) {
            layer.bindPopup(feature.properties.Tipus_habi);
          }
        }
/*  Format capa itinerari==================*/

        function getColor2(Dificultat){
          return Dificultat == "Facil"
          ? "#0000FF"
          : Dificultat == "Dificil" ? "#FF0000"
          :"FEB24C";
        }

      
        function style2(feature) {
          return {
            weight: 3,
            opacity: 0.8,
            color: getColor2(feature.properties.Dificultat),
            dashArray: "1",
            fillOpacity: 0.7,
          };
        }


        function popup2(feature, layer) {
          if (feature.properties && feature.properties.Dificultat) {
            layer.bindPopup(feature.properties.Dificultat);
          }
        }




        ambient_GJson = L.geoJson(capa, {
          style: style1,
          onEachFeature: popup,
        }).addTo(mapa_piscines);

        

        /* Capa zona foum*/
        zona_GJson = L.geoJson(limit).addTo(mapa_piscines);

        /*Capa itineraris*/

        itin_GJson = L.geoJson(itineraris,{style:style2, onEachFeature:popup2}).addTo(mapa_piscines);

        /* gestio de capes*/

        var conjunt_capes = {
          Limit: zona_GJson ,
          Habitats: ambient_GJson,
          Itineraris: itin_GJson,
        };

        var controlCapas = L.control.layers(conjunt_capes).addTo(mapa_piscines);

// cREACIO DE LA LLEGENDA

        var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

      var div = L.DomUtil.create('div', 'info legend'),
        grades = ["Dificil", "Facil"],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor2(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(mapa1);