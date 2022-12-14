import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    BarElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Title
)


const BarChart = ({ product, order, user }) => {

    const qnty = Array(20).fill(0)
    order.map((q) => {
        qnty[q.user_id - 1] = qnty[q.user_id - 1] + q.quantity;;
    })

    const data = {
        labels: user?.map(x => x.name),
        datasets: [{
            label: `${product.length} Products Available`,
            data: qnty?.map(x => x),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    const options = {
        type: 'bar',
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'BarChart of All users and total number of products ordered by user',
                font: {
                    size: 50
                },
                padding: 20,
            }
        }
    }

    return (
        <div className='m-10'>
            {
                product && (

                    <Bar
                        className='p-5'
                        height={400}
                        data={data}
                        options={options}
                    />
                )
            }
        </div>
    )
}

export default BarChart
