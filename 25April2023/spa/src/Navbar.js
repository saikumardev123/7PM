import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <Link to="/login">Login</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/register">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/contact">Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                 <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Navbar;