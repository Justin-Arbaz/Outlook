import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide(direction) {
    const { activeIndex } = this.state;
    const { children } = this.props;
    const length = children.length;

    if (direction === 'next') {
      this.setState({
        activeIndex: (activeIndex + 1) % length,
      });
    } else if (direction === 'prev') {
      this.setState({
        activeIndex: (activeIndex - 1 + length) % length,
      });
    }
  }

  render() {
    const { activeIndex } = this.state;
    const { children } = this.props;

    return (
      <div className="carousel">
        {children.map((child, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index? 'active' : ''}`}
          >
            {child}
          {index > 0 && (
            <button type="button" onClick={() => this.handleSlide('prev')}>
              Previous
            </button>
          )}
          {index < children.length - 1 && (
            <button type="button" onClick={() => this.handleSlide('next')}>
              Next
            </button>
          )}
        </div>
      ))}
      </div>
    );
  }
}

export default Carousel;