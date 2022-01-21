
import './ListProduct.css';
import NavBar from '../../shared/nav-bar/NavBar';
import { useState, useEffect } from "react";


function ListProduct() {

    // Abstraction/Encapsulation
    const [products, setProducts] = useState([]);

    // Do something after component is rendered
    useEffect(() => {
        fetch("http://localhost:56622/api/book")
            .then(res=>res.json())
                .then(res=>{
                    setProducts(res);
                })
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
                            <th scope="col">Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.imageUrl}</td>
                                    <td>{product.detail}</td>
                                    <td>{product.price}</td>
                                    <td>{product.author}</td>
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