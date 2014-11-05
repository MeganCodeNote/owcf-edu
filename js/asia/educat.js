google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawEducat);
function drawEducat() {
    var data = google.visualization.arrayToDataTable([
            ["Category", "Funds Amounts", {role: 'style'}, {role: 'annotation' }],
            ["HUS",      894,              '#BF69BA',   'High School & University Scholarships'],
            ["HSEE",     1049,             '#f1ca3a',   'High School and Elementary Education'],
            ["PSE",      1930,             '#30BAD9',   'Pre School Education'],
            ["ICB",      2145,             '#D9734E',   'Infrastructure and Capacity Building ']
        ]);

    var options = {
        title: "Funding amounts to different levels of education",
        bar: {groupWidth: "95%"},
        legend: {position: "none"},
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("educat-chart"));
    chart.draw(data, options);
}