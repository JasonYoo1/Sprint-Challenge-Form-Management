import React, { useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
//Another popular method is to have a library such as Yup handle the validation for us.
import * as yup from 'yup';
import axios from 'axios';

import CounterApp from './component/ButtonApp'

const FormComponent = (props) => {
  console.log(props);
  const { values, touched, errors, status, addUser } = props;

  return (
    <Form>
      {/*Name field with error notification*/}
      {/*TOUCHED LETS ERROR KNOW NOT TO TRIGGER VALIDATION SCHEMA*/}
      {touched.username && errors.username && <p className="error">{errors.username}</p>}
      <Field type="text" name="username" placeholder="username"/>
      {touched.password && errors.password && <p className="error">{errors.password}</p>}
      <Field type="password" name="password" placeholder=""/>
      {/* <button data-testid='formsubmit'type="submit">Submit</button> */}
      <CounterApp/>
    </Form >
  );
};

//Formik IS A LIBRARY. withFormik is a Higher-Order-COMPONENT
const FormikForm = withFormik({
  mapPropsToValues: ({ username, password }) => {
    return {
      username : username || "",
      password: password || "",
    };
  },
  //tells user what's required and uses touch and values up top
  validationSchema: yup.object().shape({
    username: yup.string()
      .required("Enter Username"),
    password: yup.string()
      .min(4, "Password must be atleast 4 characters long")
      .required("Password is required"),
  }),

  //setStatus handles data coming back from server. sets state by communicating with component
  //handleSubmit posts pushes data and uses the prop values
  handleSubmit: (values, { resetForm, setStatus, setErrors }) => {
    console.log("Request");
      axios.post('http://localhost:5000/api/register', values)
        .then(res => {
          console.log(res);
          setStatus(res);
          //can use resetForm in .then after console log if successful.
          resetForm();
        })
        .catch(error => {
          console.log(error);
        });
    }
})(FormComponent);


export default FormikForm;