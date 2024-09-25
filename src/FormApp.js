import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container } from 'react-bootstrap';


const FormApp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    city: '',
    gender: '',
    interests: [],
    address: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (checked ? [...prev.interests, value] : prev.interests.filter(i => i !== value))
        : value,
    }));
  };

  const isValid = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!value) newErrors[key] = `${key} is required`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      console.log('Form submitted:', formData);
      navigate('/success');
    }
  };

  return (
    <Container style={{ maxWidth: '70%' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            name="firstName" 
            placeholder="Enter First Name" 
            onChange={handleChange} 
          />
          {errors.firstName && <Alert variant="danger">{errors.firstName}</Alert>}
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" 
            name="lastName" 
            placeholder="Enter Last Name" 
            onChange={handleChange} 
          />
          {errors.lastName && <Alert variant="danger">{errors.lastName}</Alert>}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="Enter Email" 
            onChange={handleChange} 
          />
          {errors.email && <Alert variant="danger">{errors.email}</Alert>}
        </Form.Group>

        <Form.Group controlId="formBirthDate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control 
            type="date" 
            name="birthDate" 
            onChange={handleChange} 
          />
          {errors.birthDate && <Alert variant="danger">{errors.birthDate}</Alert>}
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control as="select" name="city" onChange={handleChange}>
            <option value="">Select City</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
          </Form.Control>
          {errors.city && <Alert variant="danger">{errors.city}</Alert>}
        </Form.Group>

        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check 
              type="radio" 
              name="gender" 
              label="Male" 
              value="male" 
              onChange={handleChange} 
            />
            <Form.Check 
              type="radio" 
              name="gender" 
              label="Female" 
              value="female" 
              onChange={handleChange} 
            />
          </div>
          {errors.gender && <Alert variant="danger">{errors.gender}</Alert>}
        </Form.Group>

        <Form.Group controlId="formInterests">
          <Form.Label>Interests</Form.Label>
          <div>
            <Form.Check 
              type="checkbox" 
              name="interests" 
              label="Music" 
              value="music" 
              onChange={handleChange} 
            />
            <Form.Check 
              type="checkbox" 
              name="interests" 
              label="Sports" 
              value="sports" 
              onChange={handleChange} 
            />
          </div>
          {errors.interests && <Alert variant="danger">{errors.interests}</Alert>}
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            as="textarea" 
            name="address" 
            placeholder="Enter Address" 
            onChange={handleChange} 
          />
          {errors.address && <Alert variant="danger">{errors.address}</Alert>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormApp;
