function loadMap() {
    var map = new Datamap({
        element: document.getElementById('asiachart'),
        fills: {
            defaultFill: 'rgba(180,210,210,0.9)' //any hex, color name or rgb/rgba value
        },
        scope: 'world',
        setProjection: function(element) {
            var projection = d3.geo.equirectangular()
                               .center([110, 25])
                               .rotate([4.4, -5])
                               .scale(500)
                               .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
            var path = d3.geo.path()
                         .projection(projection);
            return {path: path, projection: projection};
        }
    });
}

// Dealing with window resizing event
$(window).bind("load resize", function() {
    // draw map
    if (typeof loadMap != 'undefined') {
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

        console.log("width " + mapwidth);
        console.log("height " + mapheight);
        $(".datamap" ).remove();
        loadMap();
    }
});