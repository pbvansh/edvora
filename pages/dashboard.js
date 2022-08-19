import Navbar from "../components/Navbar";
import axios from 'axios';
import BarChart from "../components/BarChart";
import PiChart from "../components/PiChart";
import LineChart from "../components/LineChart";
import Pro_Price_BarChart from "../components/Pro_Price_BarChart";
import RadarChart from "../components/RadarChart";

const dashboard = ({ orders, product, users }) => {

    return (
        <div>

            <Navbar />
            <div>
                <BarChart product={product} order = {orders} user= {users}/>
                <RadarChart product={product} order = {orders}/>
                <Pro_Price_BarChart product={product}/>
                <PiChart product={product}/>
                <LineChart product={product}/>
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
