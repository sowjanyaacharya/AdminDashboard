import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement
} from 'chart.js';

import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement
);

export const mainChartOptions = {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
        legend: {
            display: true
        },
        title: {
            display: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            position: 'right',
            ticks: {
                maxTicksLimit: 6
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                maxTicksLimit: 3,
                align: 'inner'
            }
        }
    },
    point: true,
    elements: {
        point: {
            pointStyle: true
        },
        line: {
            BorderColor: 'rgb(5, 86, 141)',
            fill: false,
            borderWidth: 2,

        }
    }
}

const days = ['Feb 1, 2025', 'Feb 2, 2025', 'Feb 3, 2025', 'Feb 4, 2025', 'Feb 5, 2025']

export const getMainChartData = () => {
    return {
        labels: days,
        datasets: [
            {
                label: 'BarCharts',
                data: days.map(() => faker.number.int({ min: 600, max: 1000 })),
                backgroundColor: 'rgba(19, 71, 215, 0.5)',
                animation: true
            }
        ]
    }
}

