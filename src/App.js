import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header/Header";
import './App.css';
import {setProducts} from "./redux/action-creators";
import {ProductsList} from "./components/product-list";

const App = () => {
    const products = useSelector(({products: {products}}) => products);
    const dispatch = useDispatch();
    useEffect(() => dispatch(setProducts()), [dispatch]);

    return (
        <div>
            <Header/>
            <ProductsList products={products}/>
        </div>
    );
}

export default App;