import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    BarElement,
    LinearScale,
    CategoryScale
)


const BarChart = ({ product }) => {

    console.log(product);
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
        }
    }

    return (
        <div>
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
