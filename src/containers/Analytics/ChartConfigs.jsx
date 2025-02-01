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
    point: false,
    elements: {
        point: {
            pointStyle: false
        },
        line: {
            BorderColor: 'rgb(95,158,199)',
            fill: true,
            borderWidth: 0.5
        }
    }
}

const days = ['Jan 19, 2025', 'Jan 20, 2025', 'Jan 21, 2025', 'Jan 22, 2025', 'Jan 23, 2025', 'Jan 24, 2025', 'Jan 25, 2025', 'Jan 26, 2025', 'Jan 27, 2025', 'Jan 28, 2025', 'Jan 29, 2025', 'Jan 30, 2025', 'Feb 1, 2025', 'Feb 2, 2025', 'Feb 3, 2025', 'Feb 4, 2025', 'Feb 5, 2025']

export const getMainChartData = () => {
    return {
        labels: days,
        datasets: [
            {
                label: 'BarCharts',
                data: days.map(() => faker.number.int({ min: 600, max: 1000 })),
                backgroundColor: 'rgba(161, 207, 237, 0.5)',
                animation: false
            }
        ]
    }
}

