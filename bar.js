// Immediately invoked function to isolate scope
(async function () {
    // data
    // replace with db data
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 40 },
      { year: 2016, count: 28 },
    ];
  
    new Chart(document.getElementById('bar'), {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        // dataset logic
        datasets: [
          {
            // title legend
            label: 'bar',
            data: data.map(row => row.count),
            // bars
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            // bars border
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        // set true for onload
        animation: true,
        plugins: {
          legend: {
            // set true for keys
            display: true
          },
          tooltip: {
            // set true for hover
            enabled: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })();
  

