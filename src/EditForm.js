import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';

const EditForm = ({ product, dispatch, setEditingProduct }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT_PRODUCT', payload: formData });
    setEditingProduct(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Label</Form.Label>
        <Form.Control type="text" name="label" value={formData.label} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name="image" value={formData.image} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Quantity in Stock</Form.Label>
        <Form.Control type="number" name="qteStock" value={formData.qteStock} onChange={handleChange} required />
      </Form.Group>
      <Button variant="success" type="submit">
        <FaEdit /> Edit Product
      </Button>
    </Form>
  );
};

export default EditForm;
