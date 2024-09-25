import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ProductList = ({ products, dispatch, setEditingProduct }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Label</th>
          <th>Price</th>
          <th>Quantity in Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>
              <img src={product.image} alt={product.label} style={{ width: '50px' }} />
            </td>
            <td>{product.label}</td>
            <td>${product.price}</td>
            <td>{product.qteStock}</td>
            <td>
              <Button variant="danger" onClick={() => dispatch({ type: 'DELETE_PRODUCT', payload: product.id })}>
                <FaTrash />
              </Button>
              <Button variant="info" onClick={() => setEditingProduct(product)}>
                <FaEdit />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
