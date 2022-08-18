import Navbar from "../components/Navbar";
import axios from 'axios';
import BarChart from "../components/BarChart";

const dashboard = ({ orders, product, users }) => {

    return (
        <div>

            <Navbar />
            <div>
                <BarChart product={product}/>
            </div>
        </div>
    )
}

export default dashboard;

export async function getServerSideProps() {

    const res = await axios(' https://assessment.api.vweb.app/orders');
    const orders = res.data;

    const productRes = await axios('https://assessment.api.vweb.app/products')
    const product = productRes.data;

    const userRes = await axios('https://assessment.api.vweb.app/users')
    const users = userRes.data;
    return {
        props: {
            orders,
            product,
            users,
        }
    }
}
