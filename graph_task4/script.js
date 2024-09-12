 // Data for the line graph
 const data = {
  labels: ['age', '10', '20', '23', '25', '30', '32','36','40','50',], // Age labels
  datasets: [
      {
          label: 'Income',
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Line fill color
          borderColor: 'rgba(54, 162, 235, 1)', // Line color
          borderWidth: 2,
          fill: true, // Fill under the line
          tension: 0.3, // Line smoothness
          data: [50 ,200, 500, 900,1100,1500,2000] // Income data
      },
      {
          label: 'Expences',
          backgroundColor: 'rgba(255, 99, 132, 0.2)', // Line fill color
          borderColor: 'rgba(255, 99, 132, 1)', // Line color
          borderWidth: 2,
          fill: true, // Fill under the line
          tension: 0.3, // Line smoothness
          data: [30,100,300,700,900,1100,1800] // Expenditure data
      }
  ]
};

// Config for the line chart
const config = {
  type: 'line', // Line chart
  data: data,
  options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: 'Income vs Expenditure by Age (18 to 24)'
          }
      },
      scales: {
          y: {
              beginAtZero: true, // Ensure the y-axis starts at 0
              title: {
                  display: true,
                  text: 'Amount in ₹'
              }
          },
          x: {
              title: {
                  display: true,
                  text: 'Age'
              }
          }
      }
  }
};

// Render the chart
const myChart = new Chart(
  document.getElementById('incomeExpenditureChart'),
  config
);
