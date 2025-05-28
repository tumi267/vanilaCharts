//   pie
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
  
    new Chart(document.getElementById('polar'), {
      type: 'polarArea',
      data: {
        labels: data.map(row => row.year),
        // dataset logic
        datasets: [
          {
            // title legend
            label: 'polar',
            data: data.map(row => row.count),
          },
        ],
      },
      options: {
        animation: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
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