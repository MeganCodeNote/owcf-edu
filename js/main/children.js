// load the childrens number impacted chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChildren);

function drawChildren() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Quarters', 'Africa', 'Asia', 'Latin America', 'Average'],
    ['2013/Q1',  1165,      938,        522,         633],
    ['2013/Q2',  435,      1268,       288,         550],
    ['2013/Q3',  657,      1167,       623,         890],
    ['2013/Q4',  139,      1110,       609.4,       300]
  ]);

  var options = {
    title : 'Number Of Children Served With Education',
    vAxis: {title: "Number of Children"},
    hAxis: {title: "Quarters"},
    seriesType: "bars",
    series: {
        0: { color: '#1c91c0' },
        1: { color: '#e7711b' },
        2: { color: '#f1ca3a' },
        3: { type: "line", color: '#6f9654', lineWidth: 3, pointSize: 10, curveType: 'function'},
    }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('children-edu'));
  chart.draw(data, options);
}