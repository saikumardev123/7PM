import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';

const rootReducer = combineReducers(
    {
        products: ProductsReducer
    }
)
export default rootReducer;