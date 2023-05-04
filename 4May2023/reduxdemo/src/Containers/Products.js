import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getProducts from '../Actions/index';
function Products(props) {

    const fetchProducts = () => {
        props.getProducts();
    }

    return <>
        <h1>Products</h1>
        <button onClick={fetchProducts}>Fetch Products</button>
    </>
}
//export default Products;

export default connect(null, (dispatch) => {

    return bindActionCreators({ getProducts: getProducts }, dispatch)

})(Products);
