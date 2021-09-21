import React from 'react';

import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Link,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import { Formik } from 'formik';

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: '3rem',
    height: 'calc(100vh - 19.0625rem)',
    textAlign: 'center',
    marginBottom: '12rem',
  },
  signUp: {
    margin: '1rem',
  },
  login: {
    textDecoration: 'none',
    fontWeight: '600',
    paddingLeft: '0.5rem',
  },
  googleImg: {
    width: 75,
    marginLeft: 10,
  },
}));

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Display name is required')
    .min(2, 'Too short')
    .max(15, 'Must be 15 char or less'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .matches(/\d+/, 'Password must have a number')
    .matches(/[a-z]+/, 'Password must have a lowercase')
    .matches(/[A-Z]+/, 'Password must have a uppercase')
    .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
  password2: Yup.string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const initialValues = {
  email: '',
  password: ''
};

const handleSubmit = (values) => {
  alert(`
  username: ${values.username},
  email: ${values.email},
  password: ${values.password},
  password2: ${values.password2},
  `);
};

function Register() {
  const signupStyles = stylesFunc();

  return (
    <Container className={signupStyles.wrapper} maxWidth="sm">
      <Typography className={signupStyles.signUp} variant="h5" style={{color: "#046582"}}>
        LOGIN
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpValidationSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#046582", color: "#fff"}}
                  >
                  login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#046582", color: "#fff"}}
                  >
                  with <Link href="/Google" style={{ backgroundColor: "#046582", color: "#fff"}}>Google</Link>
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default Register;