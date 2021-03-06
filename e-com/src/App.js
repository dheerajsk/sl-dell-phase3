import logo from './logo.svg';
import './App.css';
import ListProduct from './product/list-product/ListProduct';
import ProductForm from './product/product-form/ProductForm';
import { Route, Routes } from 'react-router-dom';
import Login from './admin/login/Login';


// Function based component
// JSX (JavaScript Extension)

function App() {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<Login />}>    
        </Route>
        <Route path="/product" element={<ListProduct />}>    
        </Route>
        <Route path="/product/:id" element={<ProductForm />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
