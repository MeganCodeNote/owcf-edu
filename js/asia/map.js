function loadMap() {
    var map = new Datamap({
        element: document.getElementById('asiachart'),
        scope: 'world',
        setProjection: function(element) {
            var projection = d3.geo.equirectangular()
                               .center([110, 25])
                               .rotate([30, -10])
                               .scale(950)
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
            'MMR': { fillKey: 'lightpurple' },
            'IND': { fillKey: 'mintgreen' },
            'TLS': { fillKey: 'lightpink' },
            'PAK': { fillKey: 'brickgray' },
            'THA': { fillKey: 'sunsetpurple' }
            // 'EGY': { fillKey: 'lightpurple' },
            // 'TZA': { fillKey: 'lightpink' },
            // 'LBY': { fillKey: 'bluegray' },
            // 'DZA': { fillKey: 'lightyellow' },
            // 'SSD': { fillKey: 'lightbrown' },
            // 'SOM': { fillKey: 'tendergreen' },
            // 'GIB': { fillKey: 'lightcyan' },
            // 'AGO': { fillKey: 'lightcyan' },
            // 'COD': { fillKey: 'bluegray'},
            // 'TCD': { fillKey: 'sunsetpurple' },
            // 'CAF': { fillKey: 'lightyellow'}
        },
        geographyConfig: {
            highlightFillColor: '#62E9E0'
        }
    });
}

// Dealing with window resizing event
$(window).bind("load resize", function() {
    if (typeof loadMap != 'undefined') {
        // resize the map
        var mapwidth = $("#asiachart").width();
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
        $("#asiachart").height(mapheight);

        // remove the old map
        $(".datamap" ).remove();

        // draw the new map
        loadMap();
    }
});