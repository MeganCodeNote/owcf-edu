function loadMap() {
    // 1. create the africa map
    var map = new Datamap({
        element: document.getElementById('africachart'),
        scope: 'world',
        setProjection: function(element) {
            var projection = d3.geo.equirectangular()
                               .center([23, -3])
                               .rotate([4.4, 0])
                               .scale(400)
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
            'KEN': { fillKey: 'lightpurple' },
            'BFA': { fillKey: 'mintgreen' },
            'ZWE': { fillKey: 'lightpink' },
            'UGA': { fillKey: 'brickgray' },
            'COD': { fillKey: 'bluegray'},
            'TZA': { fillKey: 'lightpink' },
            'ZAF': { fillKey: 'sunsetpurple' },
            'BWA': { fillKey: 'lightpurple' },
            'ZMB': { fillKey: 'bluegray' },
            // 'DZA': { fillKey: 'lightyellow' },
            // 'SSD': { fillKey: 'lightbrown' },
            // 'SOM': { fillKey: 'tendergreen' },
            // 'GIB': { fillKey: 'lightcyan' },
            // 'AGO': { fillKey: 'lightcyan' },
            // 'TCD': { fillKey: 'sunsetpurple' },
            // 'CAF': { fillKey: 'lightyellow'}
        },
        geographyConfig: {
            highlightFillColor: '#62E9E0'
        }
    });

    // 2. create the africa map
    map.bubbles([
      {
        name: 'Castle Bravo',
        radius: 25,
        yeild: 15000,
        fillKey: 'darkgreen',
        latitude: -23.33,
        longitude: -46.5,
      }])
}

// Dealing with window resizing event
$(window).bind("load resize", function() {
    if (typeof loadMap != 'undefined') {
        var mapwidth = $("#africachart").width();
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

        $("#africachart").height(mapheight);

        // remove the old chart
        $(".datamap" ).remove();

        // draw the new chart 
        loadMap();
    }
});

