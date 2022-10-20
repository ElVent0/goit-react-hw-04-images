import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarStyled,
  FormStyled,
  FormButtonStyled,
  FormButtonLabelStyled,
  FormInputStyled,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [temporaryWord, setTemporaryWord] = useState('');

  const handleChange = e => {
    setTemporaryWord(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(temporaryWord);
    setTemporaryWord('');
  };

  return (
    <SearchBarStyled>
      <FormStyled onSubmit={handleSubmit}>
        <FormButtonStyled type="submit">
          <FormButtonLabelStyled>Search</FormButtonLabelStyled>
        </FormButtonStyled>

        <FormInputStyled
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={temporaryWord}
        />
      </FormStyled>
    </SearchBarStyled>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
