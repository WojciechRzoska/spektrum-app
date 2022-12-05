import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import Checkbox from 'components/molecules/FormField/Checkbox';
import FormField from 'components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvier';
import React, { useContext, useState } from 'react';

const initialFormState = {
  login: '',
  password: '',
  email: '',
  number: '',
  rules: '',
};

const Registration = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [errors, setErrors] = useState(initialFormState);
  const [check, setCheck] = useState(false);

  const context = useContext(UsersContext);
  if (!context) {
    return null;
  }
  const { handleAddUser, star_wars } = context;

  const handleCheckChange = () => {
    setCheck(!check);
  };

  const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
    setFormValues({
      ...formValues,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
    console.log(formValues);
  };

  const handleSubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    e.preventDefault();
    if (formValues.email === '') {
      setErrors((oldErrors) => ({
        ...oldErrors,
        email: 'Brak adresu email',
      }));
    } else if (!formValues.email.match(pattern)) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        email: 'Zły adres email',
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        email: '',
      }));
    }

    if (formValues.number === '') {
      setErrors((oldErrors) => ({
        ...oldErrors,
        number: 'Brak numeru telefonu',
      }));
    } else if (!formValues.number.match('[0-9]{9}')) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        number: 'Zły numer telefonu',
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        number: '',
      }));
    }
    if (!check) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        rules: 'Wymaga akceptacji regulaminu',
      }));
    } else {
    }

    if (check) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        rules: '',
      }));
    }

    if (errors.number === '' && errors.email === '' && check) {
      handleAddUser(formValues);
      setFormValues(initialFormState);
      axios.post('https://example/', formValues);
      axios.post('https://example/', JSON.stringify(star_wars));
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>FORMULARZ REJESTRACYJNY</Title>
      <FormField
        label="Login"
        id="login"
        name="login"
        value={formValues.login}
        onChange={handleInputChange}
        type="text"
        errors={errors.login}
      />
      <FormField
        label="Hasło"
        id="password"
        name="password"
        value={formValues.password}
        onChange={handleInputChange}
        type="password"
        errors={errors.password}
      />
      <FormField
        label="Email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        type="text"
        errors={errors.email}
      />
      <FormField
        label="Numer telefonu"
        id="number"
        name="number"
        value={formValues.number}
        onChange={handleInputChange}
        type="text"
        errors={errors.number}
        aria-invalid={check}
      />

      <Checkbox
        label="Akceptuję regulamin"
        id="rules"
        name="rules"
        value={`${check}`}
        onChange={handleCheckChange}
        errors={errors.rules}
      />
      <Button type="submit">zapisz</Button>
    </ViewWrapper>
  );
};

export default Registration;
