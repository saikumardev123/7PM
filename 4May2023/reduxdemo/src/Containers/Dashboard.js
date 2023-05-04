import { connect } from 'react-redux';
function Dashboard(props) {

    console.log("props", props);

    if (props.products) {
        return (
            <div>
                <h1>{props.products.length}</h1>
            </div>
        )
    }
    else {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }


}
export default connect((appState) => {
    return { products: appState.products }
}, null)(Dashboard);

