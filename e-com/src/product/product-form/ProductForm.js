import { useState, useEffect } from "react"
import NavBar from '../../shared/nav-bar/NavBar';
import './ProductForm.css'

function ProductForm() {


    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" name="inputName" placeholder="Name" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Author</label>
                        <input type="text" className="form-control" name="inputAuthor" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">ImgSrc</label>
                        <input type="text" className="form-control" name="inputImgSrc" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Details</label>
                        <input type="text" className="form-control" name="inputDetails" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Price</label>
                        <input type="number" className="form-control" name="inputPrice" />
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form >
            </div >
        </div>
    );
}

export default ProductForm;