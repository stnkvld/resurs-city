ymaps.ready(init);
var myMap, myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [59.926372, 30.318734],
        zoom: 12,
        controls: []
    }, {suppressMapOpenBlock: true});

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');

    myPlacemark = new ymaps.Placemark([59.926372, 30.318734], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/marker-logo.png',
        iconImageSize: [60, 82],
        iconImageOffset: [-30, -82]
    });

    myMap.geoObjects.add(myPlacemark);
}
