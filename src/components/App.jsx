import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import React, { Component } from 'react';
import getData from '../api/getData';

export class App extends Component {
  state = {
    pictures: [],
    word: '',
    page: 1,
    loading: false,
    bigUrl: '',
  };

  handlerSubmit = word => {
    this.setState({
      word: word,
      page: 1,
    });
  };

  async componentDidMount() {
    const parsedData = await getData(this.state.word, this.state.page);
    this.setState({
      pictures: parsedData,
    });
    // window.addEventListener('keydown', e => {
    //   if (e.code === 'Escape') {
    //     this.setState({ bigUrl: '' });
    //   }
    // });
  }

  async componentDidUpdate(_, prevState) {
    if (
      this.state.word !== prevState.word ||
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true });
      try {
        const parsedDataUpdate = await getData(
          this.state.word,
          this.state.page
        );

        if (this.state.word !== prevState.word) {
          this.setState({
            pictures: parsedDataUpdate,
            loading: false,
          });
        } else if (this.state.page !== prevState.page) {
          this.setState({
            pictures: [...prevState.pictures, ...parsedDataUpdate],
            loading: false,
          });
        }
      } catch (e) {
        console.log(e);
      }

      // this.setState({
      //   pictures: prevState.pictures.concat(parsedDataUpdate),
      //   loading: false,
      // });
    }
  }

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  onOpenModal = largeImageURL => {
    this.setState({ bigUrl: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ bigUrl: '' });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit} />
        {this.state.loading && <Loader />}
        {!this.state.loading && (
          <ImageGallery
            dataArray={this.state.pictures}
            onOpenModal={this.onOpenModal}
          />
        )}
        {this.state.pictures && <Button onLoadMore={this.handleLoadMore} />}
        {this.state.bigUrl && (
          <Modal
            bigUrl={this.state.bigUrl}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}
