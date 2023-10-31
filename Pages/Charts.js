const xValues = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const yValues = [8, 6, 5, 6, 4, 6, 7];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 1, max: 16 } }],
    },
    title: {
      display: true,
      text: "Sleep Cycle",
    },
  },
});

const xValues2 = [100, 200, 300, 400, 500, 600, 700];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues2,
    datasets: [
      {
        data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
        borderColor: "red",
        fill: false,
      },
      {
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        borderColor: "green",
        fill: false,
      },
      {
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "blue",
        fill: false,
      },
      {
        data: [1200, 1500, 1800, 2200, 2500, 2800, 3100, 3300, 3700, 4000],
        borderColor: "purple",
        fill: false,
      },
      {
        data: [500, 800, 1000, 1500, 1800, 2000, 2500, 2800, 3200, 3500],
        borderColor: "orange",
        fill: false,
      },
      {
        data: [100, 300, 600, 800, 1200, 1500, 1800, 2000, 2200, 2500],
        borderColor: "yellow",
        fill: false,
      },
      {
        data: [700, 1000, 1300, 1600, 1900, 2200, 2500, 2800, 3100, 3400],
        borderColor: "cyan",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Stress levels",
    },
  },
});

var xValues3 = ["Veg", "NonVeg", "Fast Food", "Water", "Cold Drinks"];
var yValues3 = [30, 79, 24, 24, 15];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("myChart3", {
  type: "doughnut",
  data: {
    labels: xValues3,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues3,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Food Habits",
    },
  },
});
