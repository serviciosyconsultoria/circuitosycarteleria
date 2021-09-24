var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CIRCUITOS2019_1 = new ol.format.GeoJSON();
var features_CIRCUITOS2019_1 = format_CIRCUITOS2019_1.readFeatures(json_CIRCUITOS2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIRCUITOS2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIRCUITOS2019_1.addFeatures(features_CIRCUITOS2019_1);
var lyr_CIRCUITOS2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIRCUITOS2019_1, 
                style: style_CIRCUITOS2019_1,
                interactive: false,
                title: '<img src="styles/legend/CIRCUITOS2019_1.png" /> CIRCUITOS 2019'
            });
var format_CIRCUITOS2021carteleria_2 = new ol.format.GeoJSON();
var features_CIRCUITOS2021carteleria_2 = format_CIRCUITOS2021carteleria_2.readFeatures(json_CIRCUITOS2021carteleria_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIRCUITOS2021carteleria_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIRCUITOS2021carteleria_2.addFeatures(features_CIRCUITOS2021carteleria_2);
var lyr_CIRCUITOS2021carteleria_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIRCUITOS2021carteleria_2, 
                style: style_CIRCUITOS2021carteleria_2,
                interactive: false,
                title: '<img src="styles/legend/CIRCUITOS2021carteleria_2.png" /> CIRCUITOS 2021 carteleria'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CIRCUITOS2019_1.setVisible(false);lyr_CIRCUITOS2021carteleria_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CIRCUITOS2019_1,lyr_CIRCUITOS2021carteleria_2];
lyr_CIRCUITOS2019_1.set('fieldAliases', {'id': 'id', 'Id_1': 'Id_1', 'Circuito': 'Circuito', });
lyr_CIRCUITOS2021carteleria_2.set('fieldAliases', {'id': 'id', 'Id_1': 'Id_1', 'Circuito': 'Circuito', });
lyr_CIRCUITOS2019_1.set('fieldImages', {'id': 'TextEdit', 'Id_1': 'TextEdit', 'Circuito': 'Range', });
lyr_CIRCUITOS2021carteleria_2.set('fieldImages', {'id': 'TextEdit', 'Id_1': 'TextEdit', 'Circuito': 'Range', });
lyr_CIRCUITOS2019_1.set('fieldLabels', {'id': 'no label', 'Id_1': 'no label', 'Circuito': 'no label', });
lyr_CIRCUITOS2021carteleria_2.set('fieldLabels', {'id': 'no label', 'Id_1': 'no label', 'Circuito': 'no label', });
lyr_CIRCUITOS2021carteleria_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});