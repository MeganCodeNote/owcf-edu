function loadMap() {
    var map = new Datamap({
        element: document.getElementById('latinchart'),
        scope: 'world',
        setProjection: function(element) {
            var projection = d3.geo.equirectangular()
                               .center([105, 2])
                               .rotate([200, -10])
                               .scale(270)
                               .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
            var path = d3.geo.path()
                         .projection(projection);
            return {path: path, projection: projection};
        },
        fills: {
            defaultFill:  'rgba(210,210,210,0.9)', 
            tendergreen:  'rgba(162, 242, 135, 0.9)', 
            lightcyan:    'rgba(130, 194, 245, 0.9)',
            lightyellow:  'rgba(240,230,154,0.5)',
            lightpink:    'rgba(227,168,166,0.55)',
            lightpurple:  '#BAAAFF',
            mintgreen:    '#BCFFAD',
            lakeblue:     '#62E9E0',
            brickgray:    '#D9C6B0',
            sunsetpurple: '#D98CFF',
            bluegray:     '#CFCEF2',
            lightbrown:   '#C7B9A6',
            highyellow:   '#FFFE61',
            darkgreen:    '#A39C80',
        },
        data: {
            'PAN': { fillKey: 'lightpurple' },
            'NIC': { fillKey: 'mintgreen' },
            'BRA': { fillKey: 'lightpink' },
            'USA': { fillKey: 'brickgray' },
            'HTI': { fillKey: 'sunsetpurple'},
            'ARG': { fillKey: 'lightcyan' },
            'ECU': { fillKey: 'lightyellow' }
        },
        geographyConfig: {
            highlightFillColor: '#62E9E0'
        }
    });

    // 2. create the africa map
    
    var radiusNumber = 10;
    var fillColor = "darkgreen";
    var yeildVal = 15000;    
    
    map.bubbles([
        {
            name: 'Bocas School Project',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 9.19,
            longitude: -82.15,
        },
        {
            name: 'COMPALCIHT Association',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 11.12,
            longitude: -86.6,
        },
        {
            name: 'Crea+',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: -23.33,
            longitude: -46.37,
        },
        {
            name: 'FDEGL',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 13.32,
            longitude: -85.84,
        },
        {
            name: 'Girls to Women',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 37.28,
            longitude: -122.8,
        },
        {
            name: 'Global Chalkboard Project (Victor Hugo School)',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 19.27,
            longitude: -72.4,
        },
        {
            name: 'Partners in Development Foundation (PIDF)',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 21.18,
            longitude: -157.51,
        },
        {
            name: 'P.E.T.I.S.O.S',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: -41.8,
            longitude: -71.18,
        },
        {
            name: 'Tadeo Torres',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: -2.54,
            longitude: -79,
        }
    ])
}

// Dealing with window resizing event
$(window).bind("load resize", function() {
    if (typeof loadMap != 'undefined') {
        // resize the map
        var mapwidth = $("#latinchart").width();
        var mapheight = mapwidth;
        if (mapwidth >= 800) {
            mapheight *= 0.6;
        } else if (mapwidth >= 640) {
            mapheight *= 0.8;
        } else if (mapwidth >= 600){
            mapheight *= 0.9;
        } else {
            mapheight *= 1.0;
        }
        $("#latinchart").height(mapheight);

        // remove the old map
        $(".datamap" ).remove();

        // draw the new map
        loadMap();
    }

    // add click event to the bubbles
    $(".datamaps-bubble").on('click', function(event) {
        var data = JSON.parse(this.getAttribute("data-info"));
        console.log(data);
        console.log(data.latitude);
    });
});