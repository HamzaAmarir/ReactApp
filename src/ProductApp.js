import React, { useReducer, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';
import AddForm from './AddForm';
import EditForm from './EditForm';

const initialState = {
  products: [
    { id: 1, label: 'Product 1', image: 'https://via.placeholder.com/50', price: 10, qteStock: 100 },
    { id: 2, label: 'Product 2', image: 'https://via.placeholder.com/50', price: 15, qteStock: 50 },
  ],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter(product => product.id !== action.payload) };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload.id ? action.payload : product),
      };
    default:
      return state;
  }
};

const ProductApp = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <Container>
      <h1>Product Management</h1>
      <AddForm dispatch={dispatch} />
      {editingProduct && (
        <EditForm product={editingProduct} dispatch={dispatch} setEditingProduct={setEditingProduct} />
      )}
      {/* <ProductList products={state.products} dispatch={dispatch} setEditingProduct={setEditingProduct} /> */}
    </Container>
  );
};

export default ProductApp;
