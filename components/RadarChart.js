import { Chart as ChartJS, Tooltip, Legend, ArcElement,RadialLinearScale } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
    Tooltip, Legend, ArcElement, RadialLinearScale
)


const RadarChart = ({ product, order }) => {

    const sell = Array(50).fill(0)
    order.map(x => {
        sell[x.product_id - 1] = sell[x.product_id - 1] + x.quantity;
    })
    const data = {
        labels: product.map(x => x.name),
        datasets: [{
            label: 'Selling',
            data: sell.map(x => x),
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'stock',
            data: product?.map(x => x.stock),
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    };

    const options = {
        type: 'Radar',
        maintainAspectRatio: true,
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
                text: 'RadarChart of All product in stock AND have been sold.',
                font : {
                    size : 50
                },
                padding : 20
            }
        }
    }

    return (
        <div className='m-20'>
            {
                product && (

                    <Radar
                       className='p-20'
                        data={data}
                        options={options}
                    />
                )
            }
        </div>
    )
}

export default RadarChart
