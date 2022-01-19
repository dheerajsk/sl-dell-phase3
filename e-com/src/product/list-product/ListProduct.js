
import './ListProduct.css';
import NavBar from '../../shared/nav-bar/NavBar';
import { useState, useEffect } from "react";


function ListProduct() {

    // Abstraction/Encapsulation
    const [products, setProducts] = useState([]);

    // Do something after component is rendered
    useEffect(() => {
        var items = [];
        items.push({ id: 1, name: 'Product 1', image: '', detail: 'This is a test', price: 100, isActive: true });
        items.push({ id: 2, name: 'Product 2', image: '', detail: 'This is a test', price: 200, isActive: true });
        items.push({ id: 3, name: 'Product 3', image: '', detail: 'This is a test', price: 300, isActive: false });
        items.push({ id: 4, name: 'Product 4', image: '', detail: 'This is a test', price: 400, isActive: true });
        setProducts(items);
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <div className='container'>
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Detail</th>
                            <th scope="col">Price</th>
                            <th scope="col">IsActive</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.image}</td>
                                    <td>{product.detail}</td>
                                    <td>{product.price}</td>
                                    <td>{product.isActive ? 'Yes' : 'No'}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListProduct;