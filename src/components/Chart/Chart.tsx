import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
    },
  },
  plugins: {
    tooltip: {
      enabled: false,
    },
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      display: false,
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
        border: false,
        font: {
          size: 16
        },

      }
    },
  },
};
const labels = ['landing page', 'configurator', 'check-out', 'deal'];

export const initValueToLabels: {[key: string]: [number, number]} = {
  'landing page': [0, 7.4],
  'configurator': [7.4, 7.6],
  'check-out': [7.6, 14.6],
  'deal': [14.6, 18.4]
}

export const data = {
  labels,
  datasets: [
    {
      data: labels.map((value) => initValueToLabels[value]),
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      fill: true,
      backgroundColor: "green",
      cubicInterpolationMode: "monotone",
    },
  ],
};


// TODO! add actions randomize
// const actions = [
//   {
//     name: 'Randomize',
//     handler(chart) {
//       chart.data.datasets.forEach(dataset => {
//         dataset.data = chart.data.labels.map(() => {
//           return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
//         });
//       });
//       chart.update();
//     }
//   },
// ];

const Chart: React.FC = () => {
  const handleClick = () => {
    // ... random
  }
  return <div>
    <button
    //style={/*add style*/}
    onClick={handleClick}>
    </button>
    <Bar options={options} data={data} />
  </div>;
}
export default Chart;
