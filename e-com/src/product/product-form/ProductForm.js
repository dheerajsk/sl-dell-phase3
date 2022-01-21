import { useState, useEffect } from "react"
import NavBar from '../../shared/nav-bar/NavBar';
import './ProductForm.css'

function ProductForm() {


    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.elements);
        const name=event.target.elements[0];
        const author=event.target.elements[1];
        const imgSrc=event.target.elements[2];
        const details=event.target.elements[3];
        const price=event.target.elements[4];
        
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="inputName" placeholder="Name" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input type="text" className="form-control" name="inputAuthor" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">ImgSrc</label>
                        <input type="text" className="form-control" name="inputImgSrc" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Details</label>
                        <input type="text" className="form-control" name="inputDetails" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" name="inputPrice" />
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form >
            </div >
        </div>
    );
}

export default ProductForm;