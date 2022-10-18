// import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { GallaryStyled } from './ImageGallery.styled';

const ImageGallery = ({ dataArray, onOpenModal }) => {
  return (
    <>
      <GallaryStyled>
        {dataArray &&
          dataArray.map(item => {
            return (
              <ImageGalleryItem
                key={item.id}
                bigUrl={item.largeImageURL}
                smallUrl={item.previewURL}
                alt={item.tags.split()}
                onOpenModal={onOpenModal}
              />
            );
          })}
      </GallaryStyled>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  dataArray: PropTypes.array,
  onOpenModal: PropTypes.func,
};
