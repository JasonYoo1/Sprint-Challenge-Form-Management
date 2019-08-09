import React, { useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import CounterApp from './component/ButtonApp'

const FormComponent = (props) => {
  console.log(props);
  const { values, touched, errors, status, addUser } = props;

  //implemented useEffect so user doesn't re-render everytime
  useEffect(() => {
      //checking if status is defined
    if (status) {
        //appends to array
      props.addUser(status);
    }
  }, [status]);

  return (
    <Form>
      {touched.username && errors.username && <p className="error">{errors.username}</p>}
      <Field type="text" name="username" placeholder="username"/>
      {touched.password && errors.password && <p className="error">{errors.password}</p>}
      <Field type="password" name="password" placeholder=""/>
      {/* <button data-testid='formsubmit'type="submit">Submit</button> */}
      <CounterApp/>
    </Form>
  );
};

const FormikForm = withFormik({
  mapPropsToValues: ({ username, password }) => {
    return {
      username : username || "",
      password: password || "",
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string()
      .required("Enter Username"),
    password: yup.string()
      .min(4, "Password must be atleast 4 characters long")
      .required("Password is required"),
  }),

  //setStatus handles data coming back from server. sets state by communicating with component
  handleSubmit: (values, { resetForm, setStatus, setErrors }) => {
    console.log("Request");
      axios.post('http://localhost:5000/api/register', values)
        .then(res => {
          console.log(res);
          setStatus(res);
          resetForm();
        })
        .catch(error => {
          console.log(error);
        });
    }
})(FormComponent);


export default FormikForm;