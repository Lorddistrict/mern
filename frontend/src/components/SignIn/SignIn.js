import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { Formik } from 'formik';
import React, {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import './SignIn.scss';
import {TextField} from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const validationRules = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup.string().required('Password is required'),
});

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
    height: theme.spacing(6)
  }
}));

const SignIn = () => {
  const classes = useStyles();

  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = async (values) => {
    const resp = await fetch(process.env.REACT_APP_BASE_URL + '/auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    if (resp.status === 200) {
      const { token } = await resp.json();
      localStorage.setItem('token', token);
      setIsAuth(true);
    }
  };

  if (isAuth) {
    return <Redirect to="/inventory"/>;
  }

  return (
    <div>
      <Formik
        validateOnMount={true}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          acceptTerms: false
        }}
        validationSchema={validationRules}
        onSubmit={ async (values, { setSubmitting }) => {
          setSubmitting(true);
          await handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Container component='main' maxWidth='sm'>
            <h1>Sign in</h1>
            <div style={{ marginTop: 10 }}>
              <form onSubmit={ handleSubmit }>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='email'
                      name='email'
                      label='Email Address'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email ? <div className='error'>{errors.email}</div> : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='password'
                      name='password'
                      label='Password'
                      type='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password ? <div className='error'>{errors.password}</div> : null}
                  </Grid>
                </Grid>
                <Button
                  className={classes.button}
                  type='submit'
                  disabled={isSubmitting || Object.entries(errors).length !== 0}
                  fullWidth
                  variant='contained'
                  color='primary'
                  startIcon={<SendIcon />}
                >
                  Log in
                </Button>
              </form>
            </div>
          </Container>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
