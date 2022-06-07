import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
// image
import carusel1 from '../images/carusel/1.png';
import carusel2 from '../images/carusel/2.png';
import carusel3 from '../images/carusel/3.png';
import carusel4 from '../images/carusel/4.png';
import carusel5 from '../images/carusel/5.png';
import carusel6 from '../images/carusel/6.png';
import carusel7 from '../images/carusel/7.png';
import carusel8 from '../images/carusel/8.png';



class CarouselLine2 extends React.Component {
  items = [<img src={carusel1}/>, <img src={carusel2}/>,<img src={carusel4}/>, <img src={carusel5}/>, <img src={carusel6}/>, <img src={carusel7}/>, <img src={carusel8}/>,]

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


export default CarouselLine2;