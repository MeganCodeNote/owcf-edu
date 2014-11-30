function loadMap() {
    var map = new Datamap({
        element: document.getElementById('asiachart'),
        scope: 'world',
        setProjection: function(element) {
            var projection = d3.geo.equirectangular()
                               .center([122, 16])
                               .rotate([30, -10])
                               .scale(650)
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
            lightgreen:   '#b5cf6b'
        },
        data: {
            'MMR': { fillKey: 'lightpurple' },
            'IND': { fillKey: 'mintgreen' },
            'TLS': { fillKey: 'lightpink' },
            'PAK': { fillKey: 'brickgray' },
            'THA': { fillKey: 'sunsetpurple' }
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

            name: 'Build a School in Burma',  // text shown in tooltip
            radius: radiusNumber,             // how large the bubble is
            yeild: yeildVal,
            fillKey: fillColor,              // the color of the bubble
            latitude: 22.2,                   // location of the bubble
            longitude: 98.8,
            href: 'http://www.YourURL.com'    // href of the organization
        }
        ,{
            name: 'Build a School in India (Mata Balak)',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 17.26,
            longitude: 75.11,
            href: 'http://www.YourURL.com'
        }
        ,{
            name: 'Familia Hope Orphanage',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: -8.43,
            longitude: 125.26,
            href: 'http://www.YourURL.com'
        }
        ,{
            name: 'Helen Keller Institute',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 10.47,
            longitude: 76.39,
            href: 'http://www.YourURL.com'
        }
        ,{
            name: 'Jagriti Vihara (Hospital for Hope)',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 23.36,
            longitude: 85.16,
            href: 'http://www.YourURL.com'
        }
        ,{
            name: 'Mubarika Campus',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 32.29,
            longitude: 74.31,
        }
        ,{
            name: 'Nari Jagran Manch',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 24,
            longitude: 86.28,
        }
        ,{
            name: 'Nirvanavan Foundation',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 27.33,
            longitude: 76.37,
        }
        ,{
            name: 'Pa-O National Development Organization (PNDO)',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 19.17,
            longitude: 99.57,
        }
        ,{
            name: 'People First Educational Trust',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 24,
            longitude: 83.18,
        }
        ,{
            name: 'Prajna Vihara School',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 26.5,
            longitude: 83.18,
        }
        ,{
            name: 'Siva Shanta Mother and Child Health Centre',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 11.1,
            longitude: 76.57,
        }
        ,{
            name: 'Smaraami Foundation',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 17.23,
            longitude: 78.29,
        }
        ,{
            name: 'Topu Honis Shelter Home',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: -9.17,
            longitude: 124.17,
        }
        ,{
            name: 'Zakat Foundation of India',
            radius: radiusNumber,
            yeild: yeildVal,
            fillKey: fillColor,
            latitude: 28.38,
            longitude: 77.13,
            href: 'http://www.YourURL.com'
        }
    ]);
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
    };

    // add click event to the bubbles
    $(".datamaps-bubble").on('click', function(event) {
        var data = JSON.parse(this.getAttribute("data-info"));
        console.log(data);
        $("#annotation")
    });
});

