import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Products from './Products';
function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <Link to="/login">Login</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/register">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/products">Products</Link>
                <Routes>
                    <Route path="/login" element={<Login></Login>} ></Route>
                    <Route path="/register" element={<Register></Register>} ></Route>
                    <Route path="/products" element={<Products></Products>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Navbar;