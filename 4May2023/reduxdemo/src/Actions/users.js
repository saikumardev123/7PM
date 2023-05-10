import axios from 'axios';
export default function getUsers() {

    console.log("action called");

    var promise = axios.get("https://fakestoreapi.com/products");
    return {
        payload: promise,
        type: "GET_PRODUCTS"
    }
}
