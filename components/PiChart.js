import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(
    Tooltip, Legend, ArcElement
)


const PiChart = ({ product }) => {

    const data = {
        labels: product?.map(x => x.name),
        datasets: [{
            label: `${product.lenngth} Products Available`,
            data: product?.map(x => x.selling_price),
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
        type: 'Pie',
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
                text: 'Pie Chart of All product AND their price',
                font: {
                    size: 50
                },
                padding: 50
            }
        }
    }

    return (
        <div className='m-20'>
            {
                product && (

                    <Pie
                        className='p-20'
                        height={500}
                        width={500}
                        data={data}
                        options={options}
                    />
                )
            }
        </div>
    )
}

export default PiChart
