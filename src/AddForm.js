import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddForm = ({ dispatch }) => {
  const [label, setLabel] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [qteStock, setQteStock] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      label,
      image,
      price: parseFloat(price),
      qteStock: parseInt(qteStock),
    };
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    setLabel('');
    setImage('');
    setPrice('');
    setQteStock('');
    navigate('/home'); 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formLabel">
        <Form.Label>Label</Form.Label>
        <Form.Control type="text" value={label} onChange={(e) => setLabel(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formQteStock">
        <Form.Label>Quantity in Stock</Form.Label>
        <Form.Control type="number" value={qteStock} onChange={(e) => setQteStock(e.target.value)} required />
      </Form.Group>
      <Button variant="primary" type="submit">Add Product</Button>
    </Form>
  );
};

export default AddForm;
