import React from 'react';
import { Formik, Field, Form, useField, FieldArray } from 'formik';
import { TextField, Button, Select, MenuItem, FormControl } from '@material-ui/core';
import * as Yup from 'yup';
import 'fontsource-roboto';
import estadosArray from './estados';

const MyTextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";

    return (
        <TextField
            label={label}
            {...field}
            helperText={errorText}
            error={!!errorText}
        />
    );
}

const schema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório").min(10, "Muito curto"),
    idade: Yup.number().required("Campo obrigatório").min(16, "Idade mínima de 16 anos"),
    cpf: Yup.number().required("Campo obrigatório"),
    matricula: Yup.string().required("Campo obrigatório").min(9, "Formato inválido").max(9, "Formato inválido"),
    curso: Yup.string().required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    numero: Yup.number().optional(),
    complemento: Yup.string().optional(),
    bairro: Yup.string().required("Campo obrigatório"),
    cidade: Yup.string().required("Campo obrigatório"),
    estado: Yup.string().required("Campo obrigatório"),
    cep: Yup.string().required("Campo obrigatório").min(8, "Formato inválido").max(8, "Formato inválido")
});

const FormikForm = () => {
    const handleSubmitting = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.info(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 400)
    }

    return (
        <Formik initialValues={{
            nome: '',
            idade: '',
            cpf: '',
            matricula: '',
            curso: '',
            endereco: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
            cep: ''
        }}
            validationSchema={schema}
            onSubmit={handleSubmitting}
        >
            {({ values, isSubmitting }) => (
                <Form>
                    <FormControl>
                        <MyTextField label="Nome Completo*" name="nome" />
                        <br />
                        <MyTextField label="Idade*" name="idade" />
                        <br />
                        <MyTextField label="CPF*" name="cpf" />
                        <br />
                        <MyTextField label="Matrícula*" name="matricula" />
                        <br />
                        <MyTextField label="Curso*" name="curso" />
                        <br />
                        <MyTextField label="Endereço*" name="endereco" />
                        <br />
                        <MyTextField label="Número" name="numero" />
                        <br />
                        <MyTextField label="Complemento" name="complemento" />
                        <br />
                        <MyTextField label="Bairro*" name="bairro" />
                        <br />
                        <MyTextField label="Cidade*" name="cidade" />
                        <br />
                        <FieldArray name="estados">
                            <Field label="Estado*" labelId="label" name="estado" type="select" as={Select}>
                                <MenuItem value="" disabled>
                                    Estado
                            </MenuItem>
                                {estadosArray.map(estado => (
                                    <MenuItem key={estado.ID} value={estado.Sigla}>{estado.Nome}</MenuItem>
                                ))}
                            </Field>
                        </FieldArray>
                        <br />
                        <MyTextField label="CEP*" name="cep" />
                        <br />
                        <Button type="submit" disabled={isSubmitting} color="primary">
                            Cadastrar
                    </Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
    );
}

export { FormikForm };