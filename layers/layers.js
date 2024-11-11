var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_cuerpo_agua2_1 = new ol.format.GeoJSON();
var features_cuerpo_agua2_1 = format_cuerpo_agua2_1.readFeatures(json_cuerpo_agua2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuerpo_agua2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuerpo_agua2_1.addFeatures(features_cuerpo_agua2_1);
var lyr_cuerpo_agua2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cuerpo_agua2_1, 
                style: style_cuerpo_agua2_1,
                popuplayertitle: "cuerpo_agua2",
                interactive: true,
                title: '<img src="styles/legend/cuerpo_agua2_1.png" /> cuerpo_agua2'
            });
var format_santiago_chile_2 = new ol.format.GeoJSON();
var features_santiago_chile_2 = format_santiago_chile_2.readFeatures(json_santiago_chile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_santiago_chile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_santiago_chile_2.addFeatures(features_santiago_chile_2);
var lyr_santiago_chile_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_santiago_chile_2, 
                style: style_santiago_chile_2,
                popuplayertitle: "santiago_chile",
                interactive: true,
                title: '<img src="styles/legend/santiago_chile_2.png" /> santiago_chile'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_cuerpo_agua2_1.setVisible(true);lyr_santiago_chile_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_cuerpo_agua2_1,lyr_santiago_chile_2];
lyr_cuerpo_agua2_1.set('fieldAliases', {'objectid': 'objectid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Nombre': 'Nombre', 'Tipo': 'Tipo', });
lyr_santiago_chile_2.set('fieldAliases', {'objectid': 'objectid', 'fc': 'fc', 'cod_comuna': 'cod_comuna', 'Nombre': 'Nombre', 'Clase_Topo': 'Clase_Topo', 'Comuna': 'Comuna', 'Provincia': 'Provincia', 'Region': 'Region', });
lyr_cuerpo_agua2_1.set('fieldImages', {'objectid': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_santiago_chile_2.set('fieldImages', {'objectid': 'TextEdit', 'fc': 'TextEdit', 'cod_comuna': 'TextEdit', 'Nombre': 'TextEdit', 'Clase_Topo': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', 'Region': 'TextEdit', });
lyr_cuerpo_agua2_1.set('fieldLabels', {'objectid': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Nombre': 'no label', 'Tipo': 'no label', });
lyr_santiago_chile_2.set('fieldLabels', {'objectid': 'no label', 'fc': 'no label', 'cod_comuna': 'no label', 'Nombre': 'header label - always visible', 'Clase_Topo': 'no label', 'Comuna': 'no label', 'Provincia': 'no label', 'Region': 'no label', });
lyr_santiago_chile_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});