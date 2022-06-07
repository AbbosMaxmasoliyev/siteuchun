import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
// image
import carusel1 from '../images/carusel1.png';
import carusel2 from '../images/carusel2.png';
import carusel3 from '../images/carusel3.png';


class CarouselLine extends React.Component {
  items = [<img src={carusel1}/>, <img src={carusel2}/>,<img src={carusel3}/>, <img src={carusel1}/>, <img src={carusel1}/>]

  state = {
    currentIndex: 0,
    responsive: { 1500: { items:3 } },
    galleryItems: this.galleryItems(),
    dotsDisabled:true,
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  onSlideChanged = (e) => this.setState({ currentIndex: e.item })

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

  galleryItems() {
    return this.items.map((i) => <h2 key={i}> {i}</h2>)
  }

  render() {
    const { galleryItems, responsive, currentIndex, dotsDisabled } = this.state
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />

        {/* <ul>{this.items.map(this.thumbItem)}</ul>
        <button onClick={() => this.slidePrev()}>Prev button</button>
        <button onClick={() => this.slideNext()}>Next button</button> */}
      </div>
    )
  }
}


export default CarouselLine;