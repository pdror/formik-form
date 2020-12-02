import React, { Component } from 'react';
import { FormikForm } from './formikForm';
import { Container, Box, Typography } from '@material-ui/core';
import 'fontsource-roboto';

export default class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h4">
            Formulário de Cadastro
          </Typography>
          <FormikForm />
        </Box>
      </Container>
    );
  }
}