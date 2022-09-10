import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function LineChart2() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "test",
          data: scores,
          tension: 0.3,
          borderColor: "#DF5956",
          pointRadius: 6,
          pointBackgroundColor: "#9C8430",
          backgroundColor: "transparent",
        },
      ],
      labels,
    };
  }, []);

  return <Line data={data} options={options} style={{ width: 350 }}/>;
}