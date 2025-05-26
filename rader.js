(async function () {
    // Data
    // replace with db data
    const data = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
      }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
      }]
    };
  
    new Chart(document.getElementById('radar'), {
      type: 'radar',
      data: data,
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
          r: { // use `r` for radial scale in radar charts
            beginAtZero: true
          }
        },
      },
    });
  })();
  