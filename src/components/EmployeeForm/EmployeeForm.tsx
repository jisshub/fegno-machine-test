import React from 'react';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      position: '',
    },
    onSubmit: values => {
      console.log('Form Values', values);
    },
  });
  return (
  <Container fluid  className='container-part'>
    <Form onSubmit={formik.handleSubmit} className='form-part justify-content-center'>
        <Form.Group className='mb-3'>
          <Form.Label>
            First Name
          </Form.Label>
          <Form.Control
            id='firstName'
            name="firstName" 
            type='text' 
            placeholder='Enter FirstName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            />
        </Form.Group>
        
        <Form.Group className='mb-3'>
          <Form.Label>
            Last Name
          </Form.Label>
          <Form.Control
            id='lastName'
            name='lastName' 
            type='text' 
            placeholder='Enter LastName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            />
        </Form.Group>
        
        <Form.Group className='mb-3'>
          <Form.Label>
            Position
          </Form.Label>
          <Form.Control
            id='position' 
            name='position'
            type='text' 
            placeholder='Enter Position'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.position}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  </Container>
  );
};

export default EmployeeForm;
