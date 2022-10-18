import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import React, { useState } from 'react';
import getData from '../api/getData';
import { useEffect } from 'react';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [word, setWord] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bigUrl, setBigUrl] = useState('');

  const handlerSubmit = tempWord => {
    setWord(tempWord);
    setPictures([]);
    setPage(1);
  };

  // const wordRef = useRef('');
  // const pageRef = useRef(1);

  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     const parsedData = await getData(wordRef, pageRef);
  //     setPictures(parsedData);
  //   };
  //   fetchPhotos();
  // }, []);

  useEffect(() => {
    if (word === '' && page === 1) {
      // return;
      const a = async () => {
        try {
          setLoading(true);
          const parsedDataUpdate = await getData(word, page);
          console.log(parsedDataUpdate);
          setPictures(() => [...parsedDataUpdate]);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      };
      a();
    } else if (word === '' && page !== 1) {
      const a = async () => {
        try {
          setLoading(true);
          const parsedDataUpdate = await getData(word, page);
          console.log(parsedDataUpdate);
          setPictures(prevState => [...prevState, ...parsedDataUpdate]);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      };
      a();
    }
    const a = async () => {
      try {
        setLoading(true);
        const parsedDataUpdate = await getData(word, page);
        setPictures(prevState => [...prevState, ...parsedDataUpdate]);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    a();
  }, [word, page]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onOpenModal = largeImageURL => {
    setBigUrl(largeImageURL);
  };

  const handleCloseModal = () => {
    setBigUrl('');
  };

  return (
    <>
      <Searchbar onSubmit={handlerSubmit} />
      {loading && <Loader />}
      {!loading && (
        <ImageGallery dataArray={pictures} onOpenModal={onOpenModal} />
      )}
      {pictures && <Button onLoadMore={handleLoadMore} />}
      {bigUrl && <Modal bigUrl={bigUrl} handleCloseModal={handleCloseModal} />}
    </>
  );
};
