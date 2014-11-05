google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawDollars);
function drawDollars() {
    var data = google.visualization.arrayToDataTable([
        ['Quarters', '2013', '2014'],
        ['Q1',  1000,      400],
        ['Q2',  1170,      460],
        ['Q3',  660,       1120],
        ['Q4',  1030,      540]
        ]);

    var options = {
        title: 'Dollars Raised by Champions for Education',
        lineWidth: 3, 
        pointSize: 15, 
        curveType: 'function',
        pointShape: 'diamond',
        series: {0: { color: '#1c91c0' }}
    };

    var chart = new google.visualization.LineChart(document.getElementById('dollars-chart'));

    chart.draw(data, options);
}