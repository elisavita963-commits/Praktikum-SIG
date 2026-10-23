var wms_layers = [];


        var lyr_Googlemaps_0 = new ol.layer.Tile({
            'title': 'Google maps ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1 = new ol.format.GeoJSON();
var features_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1 = format_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1.readFeatures(json_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1.addFeatures(features_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1);
var lyr_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1, 
                style: style_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1,
                popuplayertitle: 'Wirosari — gadm41_idn_shp__gadm41_idn_4shp',
                interactive: true,
                title: '<img src="styles/legend/Wirosarigadm41_idn_shp__gadm41_idn_4shp_1.png" /> Wirosari — gadm41_idn_shp__gadm41_idn_4shp'
            });
var format_Kecamatan_Wirosari_2 = new ol.format.GeoJSON();
var features_Kecamatan_Wirosari_2 = format_Kecamatan_Wirosari_2.readFeatures(json_Kecamatan_Wirosari_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_Wirosari_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_Wirosari_2.addFeatures(features_Kecamatan_Wirosari_2);
var lyr_Kecamatan_Wirosari_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_Wirosari_2, 
                style: style_Kecamatan_Wirosari_2,
                popuplayertitle: 'Kecamatan_Wirosari',
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_Wirosari_2.png" /> Kecamatan_Wirosari'
            });

lyr_Googlemaps_0.setVisible(true);lyr_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1.setVisible(true);lyr_Kecamatan_Wirosari_2.setVisible(true);
var layersList = [lyr_Googlemaps_0,lyr_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1,lyr_Kecamatan_Wirosari_2];
lyr_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Kecamatan_Wirosari_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jns_srn': 'Jns_srn', });
lyr_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Kecamatan_Wirosari_2.set('fieldImages', {'id': '', 'Nama': '', 'Jns_srn': '', });
lyr_Wirosarigadm41_idn_shp__gadm41_idn_4shp_1.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Kecamatan_Wirosari_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jns_srn': 'no label', });
lyr_Kecamatan_Wirosari_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});