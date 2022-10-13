import React, { useState } from 'react';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import './EmployeeForm.css';
import { Table } from 'react-bootstrap';

const EmployeeForm = () => {
  const [formArray, setformArray] = useState<{employeeId: string, firstName: string, lastName: string, position: string}[]>(
    [],
  )
  const formik = useFormik({
    initialValues: {
      employeeId: '',
      firstName: '',
      lastName: '',
      position: '',
    },
    onSubmit: (values, onSubmitProps) => {
      console.log('Form Values', values);
      setformArray(vals => [
        ...vals, values
      ]);
      console.log(formArray);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });
  return (
  <Container fluid  className='container-part'>
    <Form onSubmit={formik.handleSubmit} className='form-part justify-content-center'>

        <Form.Group className='mb-3'>
          <Form.Label>
            Employee ID
          </Form.Label>
          <Form.Control
            id='employeeId'
            name="employeeId" 
            type='number' 
            placeholder='Enter Employee ID'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.employeeId}
            />
        </Form.Group>

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

    <Table striped bordered hover className='table-section'>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {formArray.map(employee => (
          <tr key={employee.employeeId}>
            <td>{employee.employeeId}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.position}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
  );
};

export default EmployeeForm;
