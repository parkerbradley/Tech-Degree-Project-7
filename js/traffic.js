//-----------Traffic Chart-----------//
var ctx = document.getElementById('trafficChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Traffic',
            backgroundColor: 'rgba( 179, 180, 228, 30%)',
            borderColor: 'rgba( 179, 180, 228, 100%)',
            borderWidth: 1,
            data: [20, 37, 17, 48, 39, 42, 51, 34, 48, 50, 55, 43],
            lineTension: 0,
            pointRadius: 6,
            pointBorderColor: '#6C70BE',
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff',
            hoverRadius: 10,
            hoverBackgroundColor: '#6C70BE'
        }]
    },

    // Configuration options go here
    options: {
      aspectRatio: 3.8,
      scales: {
        scaleLabel: {
          fontColor: '#ACACAC'
        },
        yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#ACACAC'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#ACACAC'
          },
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

//-----------Daily Traffic-----------//
var ctx = document.getElementById('dailyTraffic').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: '#7377BF',
            borderColor: '#7377BF',
            hoverBackgroundColor: 'rgba( 115, 119, 190, 50%)',
            borderRadius: 5,
            borderWidth: 1,
            data: [75, 100, 175, 125, 225, 200, 100]
        }]
    },

    // Configuration options go here
    options: {
      aspectRatio: 1.5,
      scales: {
        scaleLabel: {
          fontColor: '#ACACAC'
        },
        yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#ACACAC'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#ACACAC'
          },
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

//-----------Mobile Users-----------//
var ctx = document.getElementById('mobileUsers').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: [
              'rgba( 116, 176, 190, 100%)',
              'rgba( 129, 200, 142, 100%)',
              'rgba( 115, 119, 190, 100%)'
            ],
            hoverBackgroundColor: [
              'rgba( 116, 176, 190, 60%)',
              'rgba( 129, 200, 142, 60%)',
              'rgba( 115, 119, 190, 60%)'
            ],
            borderRadius: 5,
            borderWidth: 1,
            data: [16.5, 16.5, 66]
        }]
    },

    // Configuration options go here
    options: {
      aspectRatio: 1.5,
      scales: {
        scaleLabel: {
          display: false
        },
        yAxes: [{
          display: false,
          ticks: {
            display: false
          },
          gridLines: {
            display: false
          }
        }],
        xAxes: [{
          display: false,
          ticks: {
            display: false
          },
          gridLines: {
            display: false
          }
        }]
      },
      legend: {
        position: 'right',
        labels: {
          fontSize: 18,
          fontColor: '#5A5A5A',
          boxWidth: 30,
          padding: 30
        }
      }
    }
});
