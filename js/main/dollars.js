google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawDollars);
function drawDollars() {
    d3.text("data/main/dollars.csv", function(error, dollars) {
        // read and reformat the data
        dollars = d3.csv.parseRows(dollars);
        for (var i = 1; i < dollars.length; i++) {
            for (var j = 1; j < dollars[0].length; j++) {  
                dollars[i][j] = parseInt(dollars[i][j]);
            }
        }

        // selected columns
        var yearIndices = [0, 1, 2, 3];    
        var filteredDollars = [];
        for (var i = 0; i < dollars.length; i++) {
            filteredDollars[i] = [];
            for (var j = 0; j < yearIndices.length; j++) {  
                filteredDollars[i][j] =  dollars[i][yearIndices[j]]
            }
        }
        console.log(filteredDollars);

        // set the data for the google charts
        var data = google.visualization.arrayToDataTable(filteredDollars);
        // var data = google.visualization.arrayToDataTable([
        //     ['Year', '2013', '2014'],
        //     ['Q1',  10000,      40000],
        //     ['Q2',  11700,      46000],
        //     ['Q3',  66000,      11200],
        //     ['Q4',  103000,     54000]
        // ]);

        var options = {
            title: 'Dollars Raised by Champions for Education',
            lineWidth: 3, 
            pointSize: 15, 
            curveType: 'function',
            pointShape: 'diamond',
            series: {0: { color: '#1c91c0' }}
        };

        // draw the chart
        var chart = new google.visualization.LineChart(document.getElementById('dollars-chart'));
        chart.draw(data, options);
    })
}