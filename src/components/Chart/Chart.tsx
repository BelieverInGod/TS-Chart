import React, { useState, useEffect } from 'react';
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
import CSS from 'csstype';


const buttonStyles: CSS.Properties = {
  display: 'flex',
  width: '5%',
  justifyContent: 'center',
  minWidth: '100px',
  color: "gray",
  fontFamily: "roboto, sans-serif",
  fontSize: "20px",
  textAlign: "center",
}

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

export const initValueToLabels1: {[key: string]: [number, number]} = {
  'landing page': [0, 7.4], 'configurator': [7.4, 7.6], 'check-out': [7.6, 14.6],'deal': [14.6, 18.4]
}

export const initValueToLabels2: {[key: string]: [number, number]} = {
  'landing page': [14.6, 18.4], 'configurator': [7.6, 14.6], 'check-out': [7.4, 7.6], 'deal': [0, 7.4]
}

export const initValueToLabels3: {[key: string]: [number, number]} = {
  'landing page': [0, 7.4], 'configurator': [14.6, 18.4], 'check-out': [7.6, 14.6], 'deal': [7.4, 7.6]
}

export const initValueToLabels4: {[key: string]: [number, number]} = {
  'landing page': [7.4, 7.6], 'configurator': [0, 7.4], 'check-out': [14.6, 18.4], 'deal': [7.6, 14.6]
}




const Chart: React.FC = () => {
  const [initialValue, setInitialValue] = useState(initValueToLabels1)

  useEffect(() => {
    
  })


  const data = {
    labels,
    datasets: [
      {
        data: labels.map((value) => initialValue[value]),
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        fill: true,
        backgroundColor: "green",
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  
  const handleClick = () => {
    if(initialValue === initValueToLabels1){
       setInitialValue(initValueToLabels2)
    } else if(initialValue === initValueToLabels2){
      setInitialValue(initValueToLabels3)
    } else if(initialValue === initValueToLabels3){
      setInitialValue(initValueToLabels4)
    }else if(initialValue === initValueToLabels4){
      setInitialValue(initValueToLabels1)
    }
  }
  return <div>
            <button
            style={buttonStyles}
            onClick={handleClick}>
              Change Info
            </button>
            <Bar options={options} data={data} />
        </div>;
}
export default Chart;
