// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GallaryItemStyled,
  GallaryItemImageStyled,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ onOpenModal, bigUrl, smallUrl, alt }) => {
  return (
    <GallaryItemStyled
      onClick={() => {
        onOpenModal(bigUrl);
      }}
    >
      <GallaryItemImageStyled src={smallUrl} alt={alt} width="200" />
    </GallaryItemStyled>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string,
  bigUrl: PropTypes.string,
  onOpenModal: PropTypes.func,
};
