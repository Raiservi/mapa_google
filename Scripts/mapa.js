
/*Creem el mapa base*/

 var mapa_piscines = L.map("mapa1").setView([41.409919, 2.226921], 18);

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

        function getColor(Tipus_habi) {
          return Tipus_habi == "Fons de  llim"
            ? "#BD0026"
            : Tipus_habi == "Parets de ciment"
            ? "#888"
            : Tipus_habi == "Area de grans roques"
            ? "#FED976"
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
            fillColor: getColor(feature.properties.Tipus_habi),
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
        ambient_GJson = L.geoJson(capa, {
          style: style1,
          onEachFeature: popup,
        }).addTo(mapa_piscines);

        /*  Capa profunditat*=======================*/

        profund_GJson = L.geoJson(profunditat).addTo(mapa_piscines);

        /* Capa zona foum*/
        zona_GJson = L.geoJson(limit).addTo(mapa_piscines);

        /*Capa itineraris*/

        itin_GJson = L.geoJson(itineraris).addTo(mapa_piscines);

        /* gestio de capes*/

        var conjunt_capes = {
          Profunditat: profund_GJson,
          Limit: zona_GJson,
          Habitats: ambient_GJson,
          Itineraris: itin_GJson,
        };

        var controlCapas = L.control.layers(conjunt_capes).addTo(mapa_piscines);