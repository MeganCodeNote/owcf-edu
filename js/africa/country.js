google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCountry);
function drawCountry() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Number of Children', {role: 'style'}, {role: 'annotation' } ],
        ['Burma',       1000,              '#b87333',         '1000'],
        ['India',       1170,              '#f1ca3a',         '1170'],
        ['Thailand',    660,               '#1c91c0',         '660'],
        ['Laor',        1030,              '#6f9654',         '1030'],
        ]);

    var options = {
        title: 'Number of Children Impacted By Countries',
        legend: {position: 'none'}
    };

    var chart = new google.visualization.BarChart(document.getElementById('country-chart'));

    chart.draw(data, options);
}