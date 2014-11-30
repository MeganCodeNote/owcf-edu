function loadMap() {
    // 1. create the africa map
    var map = new Datamap({
        element: document.getElementById('africachart'),
        scope: 'world',
        setProjection: function(element) {
            var projection = d3.geo.equirectangular()
                               .center([23, -2])
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
            'ZWE': { fillKey: 'lightcyan' },
            'UGA': { fillKey: 'tendergreen' },
            'COD': { fillKey: 'lightbrown'},
            'TZA': { fillKey: 'lightpink' },
            'ZAF': { fillKey: 'sunsetpurple' },
            'BWA': { fillKey: 'lightyellow' },
            'ZMB': { fillKey: 'bluegray' },
        },
        geographyConfig: {
            highlightFillColor: '#62E9E0'
        },

        done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                alert(geography.properties.name);
            });
        }
    });

    // 2. create the africa map
    var radiusNumber = 10;
    var fillColor = "darkgreen";  
    var yeildVal = 15000; 
    map.bubbles([
      {
        name: 'Akili Dada',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -0.17,
        longitude: 37.49,
      },
      {
        name: 'ASFOP',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: 12.57,
        longitude: -2.16,
      },
      {
        name: 'Batsiranai',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -17.51,
        longitude: 31.1,
      },
      {
        name: 'Bitone Children\'s Center and Troupe',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: 1.08,
        longitude: 31.34,
      },
      {
        name: 'CAMME (Center to Help Exploited Youth)',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -1.41,
        longitude: 28.14,
      },
      {
        name: 'El Shadai',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: 0.25,
        longitude: 34.12,
      },
      {
        name: 'Foot2Afrika',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -4.2,
        longitude: 37.2,
      },
      {
        name: 'Hlomelikusasa',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -30.55,
        longitude: 28.58,
      },
      {
        name: 'Ilela and Ngelenge School Committees',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -10.3,
        longitude: 34.36,
      },
      {
        name: 'Khulani Special School',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -29.31,
        longitude: 30.53,
      },
      {
        name: 'Kusoma International (LMEF)',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -1.2,
        longitude: 34.55,
      },
      {
        name: 'Nkomo CBO',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -27.31,
        longitude: 30.53,
      },
      {
        name: 'PING',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -24.39,
        longitude: 25.54,
      },
      {
        name: 'Precious Life Foundation',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -20.7,
        longitude: 28.37,
      },
      {
        name: 'Siyazigabisa Home of Hope',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -26,
        longitude: 28.12,
      },
      {
        name: 'St Vincent\'s Children of Kibera',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -1.17,
        longitude: 36.49,
      },
      {
        name: 'Tinga Tinga Secondary School',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -3.22,
        longitude: 35.41,
      },
      {
        name: 'Tunaweza Fund',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -2.3,
        longitude: 31.59,
      },
      {
        name: 'Zambian Institute for Sustainable Development',
        radius: radiusNumber,
        yeild: yeildVal,
        fillKey: fillColor,
        latitude: -15.25,
        longitude: 28.16,
      }
    ])
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

    // add click event to the bubbles
    $(".datamaps-bubble").on('click', function(event) {
        var data = JSON.parse(this.getAttribute("data-info"));
        $("#clicktip").remove();
        $("#link").text(data.name);
        $("#link").attr("href", "http://www.w3schools.com/jquery");
        $("#content").text(data.fillKey);
    });
});