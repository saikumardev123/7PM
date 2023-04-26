import { useState } from 'react';
import axios from 'axios';
import './App.css';
function Products() {
    const [product, setProduct] = useState(
        {
            "name": "",
            "price": 0,
            "description": "",
            "imageUrl": "",
            "quantity": 0,
            "seller": ""
        }
    )
    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setProduct({ ...product, [name]: value })
    }

    const addProduct = (event) => {
        event.preventDefault();
        console.log("product", product);
        axios.post("http://localhost:9091/product/add", product).then(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        );
    }
    return (
        <div>
            <center> <h1>Add Product</h1>
                <form>
                    <input onChange={updateState} type="text" name="name" placeholder="enter name"></input> <br></br><br></br>
                    <input onChange={updateState} type="text" name="price" placeholder="enter price"></input> <br></br><br></br>
                    <input onChange={updateState} type="text" name="description" placeholder="enter description"></input> <br></br><br></br>
                    <input onChange={updateState} type="text" name="imageUrl" placeholder="enter imageUrl"></input> <br></br><br></br>
                    <input onChange={updateState} type="text" name="quantity" placeholder="enter quantity"></input> <br></br><br></br>
                    <input onChange={updateState} type="text" name="seller" placeholder="enter seller"></input> <br></br><br></br>
                    <button onClick={addProduct}>Add Product</button>
                </form></center>
        </div>
    )
}
export default Products;