// const hourly = document.getElementById('hourly');
// const daily = document.getElementById('daily');
// const weekly = document.getElementById('weekly');
// const monthly = document.getElementById('monthly');
const controls = document.getElementById('controls');
const timeframes = document.getElementsByClassName('control-metric');

//create a random number between two numbers
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create random data values for hourly, daily, weekly, and monthly Charts
//hourly
let hourlyValues = [];
for(let i = 0; i < 25; i++ ) {
  hourlyValues.push(randomInteger(2,25));
}
//daily
let dailyValues = [];
for(let i = 0; i < 31; i++ ) {
  dailyValues.push(randomInteger(60,750));
}
//weekly
let weeklyValues = [];
for(let i = 0; i < 11; i++ ) {
  weeklyValues.push(randomInteger(660,8250));
}
//monthly
let monthlyValues = [];
for(let i = 0; i < 6; i++ ) {
  monthlyValues.push(randomInteger(3960,49500));
}

//add additional chart space above the maximum data value so that the top of the chart is not defined by the max value
function setMaxYAxis(array) {
  let max = Math.max(...array) * 1.25;
  return max;
}

//defines the labels for each chart timeframe
let labels = [
  ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
  ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
  ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
  ['January','February','March','April','May','June']
]

//creates a chart based on the selected timeframe
function createChart(labelArrayNumber, dataArray) {
    var ctx = document.getElementById('trafficChart').getContext('2d');
    var newChart = new Chart(ctx, {
    type: 'line',
    // The data for our dataset
    data: {
      labels: labels[labelArrayNumber],
      datasets: [{
          label: 'Traffic',
          backgroundColor: 'rgba( 179, 180, 228, 30%)',
          borderColor: 'rgba( 179, 180, 228, 100%)',
          borderWidth: 1,
          data: dataArray,
          lineTension: 0,
          pointRadius: 3,
          pointBorderColor: '#6C70BE',
          pointBorderWidth: 2,
          pointBackgroundColor: '#fff',
          hoverRadius: 10,
          hoverBackgroundColor: '#6C70BE'
      }]
    },
    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.5,
      scales: {
        scaleLabel: {
          fontColor: '#ACACAC'
        },
        yAxes: [{
          ticks: {
            beginAtZero: true,
            //max: setMaxYAxis(dataArray),
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
  return chart;
};

//----------- Creates a default chart to load when the window opens -----------//
function load () {
  createChart(2, weeklyValues);
  const defaultTimeframe = document.getElementById('weekly');
  defaultTimeframe.className = 'control-metric chosen';
  defaultTimeframe.style.color = "#fff";
  };

window.onload = load();


//----------- Create Chart Based on Timeline Chosen -----------//
controls.addEventListener('click', (e) => {
  for (var i = 0; i < timeframes.length; i++) {
    timeframes[i].className = 'control-metric';
    timeframes[i].style.color = "#5A5A5A";
  }
  if (e.target.id === 'hourly') {
    const timeframePicked = document.getElementById('hourly');
    timeframePicked.className = 'control-metric chosen';
    timeframePicked.style.color = "#fff";
    createChart(0, hourlyValues);
  } else if (e.target.id === 'daily') {
    const timeframePicked = document.getElementById('daily');
    timeframePicked.className = 'control-metric chosen';
    timeframePicked.style.color = "#fff";
    createChart(1, dailyValues);
  } else if (e.target.id === 'weekly') {
    const timeframePicked = document.getElementById('weekly');
    timeframePicked.className = 'control-metric chosen';
    timeframePicked.style.color = "#fff";
    createChart(2, weeklyValues);
  } else {
    const timeframePicked = document.getElementById('monthly');
    timeframePicked.className = 'control-metric chosen';
    timeframePicked.style.color = "#fff";
    createChart(3, monthlyValues);
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
      responsive: true,
      maintainAspectRatio: true,
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
      responsive: true,
      maintainAspectRatio: true,
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
