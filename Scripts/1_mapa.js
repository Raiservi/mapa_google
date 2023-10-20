
/*Creem el mapa base*/

 var mapa_piscines = L.map("mapa1").setView([41.40869899, 2.2263300418853764], 17);

        /* Capa base satelit*/


       var satelit= L.tileLayer(
          "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
          {
            maxZoom: 18,
          }
        );

        /* Capa base open street*/

        /* Control de  capa base*/
      
       var analogic = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapa_piscines);//per defecte faig apareixer aquet//
       
       
      
       var baseMaps = {
        "OpenStreetMap":analogic,
        "GoogleMaps": satelit}
      
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
        });

        

        /* Capa zona foum*/
        zona_GJson = L.geoJson(limit);

        /*Capa itineraris*/

        itin_GJson = L.geoJson(itineraris,{style:style2, onEachFeature:popup2});

        /* gestio de capes*/

        var conjunt_capes = {
          Limit: zona_GJson ,
          Habitats: ambient_GJson,
          Itineraris: itin_GJson,
        };

        var controlCapas = L.control.layers(baseMaps,conjunt_capes).addTo(mapa_piscines);

// cREACIO DE LA LLEGENDA

   