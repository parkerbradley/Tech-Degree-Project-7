var ctx = document.getElementById('trafficChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba( 179, 180, 228, 30%)',
            borderColor: 'rgba( 179, 180, 228, 100%)',
            borderWidth: 1,
            data: [20, 37, 17, 48, 39, 42, 51, 34, 48, 50, 55, 43]
        }]
    },

    // Configuration options go here
    options: {
      aspectRatio: 3.8,
      scales: {
        yAxes: [{
        ticks: {
          beginAtZero: true
          }
        }],
        xAxes: [{
          gridLines: {
                //borderDashOffset: 1
            }
        }]
      },
      legend: {
        display: false
      }
    }
});
