import React from 'react';
import { useFormik } from 'formik';

const EmployeeForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      position: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 3));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Position</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.position}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
