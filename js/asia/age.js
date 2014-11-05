google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawAge);

function drawAge() {
    var data = google.visualization.arrayToDataTable([
            ['Age Group', 'Number of Children'],
            ['Under 5',     11],
            ['5 - 12',      20],
            ['13 - 19',     33],
            ['20 - 25',     42],
            ['Adults',      11]
        ]);

    var options = {
        title: 'Age Demographics',
        pieHole: 0.4,
        slices: {
            0: { color: '#f1ca3a' },
            1: { color: '#e7711b' },
            2: { color: '#5c3292' },
            3: { color: '#6f9654' },
            4: { color: '#1c91c0' }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('age-chart'));
    chart.draw(data, options);
}