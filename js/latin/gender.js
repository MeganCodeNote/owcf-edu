google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawGender);

function drawGender() {
    var data = google.visualization.arrayToDataTable([
            ['Gender', 'Number of Children'],
            ['Female',    11],
            ['Male',      20],
        ]);

    var options = {
        title: 'Gender Breakdown in Asia',
        pieHole: 0.2,
        slices: {
            0: { color: '#f1ca3a' },
            1: { color: '#AA9AAA' },
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('gender-chart'));
    chart.draw(data, options);
}