import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const properties = {
  duration: 5000,                // 間隔(ms)
  transitionDuration: 500,       // 移動時間(ms)
  infinite: true,
  indicators: true,
  autoplay: false,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const SlideShow = ({items}) => {
  const rows = items.map((item, index) =>
    <div key={index} className="each-slide">
      <div style={{ backgroundImage: `url(${item.image.url})` }} />
    </div>
  );


  return (
    <>
      <div className="slide-container">
        <Slide {...properties}>
          {rows}
        </Slide>
      </div>
    </>
  );
}

export default SlideShow