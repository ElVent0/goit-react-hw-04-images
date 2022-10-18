// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ onLoadMore }) => {
  return (
    <ButtonStyled type="button" onClick={onLoadMore}>
      Load more
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
