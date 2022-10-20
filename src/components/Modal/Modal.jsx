import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalStyled, ModalStyledContent } from './Modal.styled';

const Modal = ({ bigUrl, handleCloseModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        handleCloseModal();
      }
    });

    return () => {
      window.removeEventListener('keydown', e => {
        if (e.code === 'Escape') {
          handleCloseModal();
        }
      });
    };
  }, [handleCloseModal]);

  const onCloseModal = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };

  return (
    <ModalStyled onClick={onCloseModal}>
      <ModalStyledContent>
        <img src={bigUrl} alt="" width="100%" />
      </ModalStyledContent>
    </ModalStyled>
  );
};

export default Modal;

Modal.propTypes = {
  bigUrl: PropTypes.string,
  onCloseModal: PropTypes.func,
};
