import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const properties = {
  duration: 5000,                // 間隔(ms)
  transitionDuration: 500,       // 移動時間(ms)
  infinite: true,
  indicators: true,
  autoplay: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const SlideShow = ({ items }) => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {items.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Slide>
    </div>
    // <div className="App">
    //   <div className="slide-container">
    //     <Slide {...properties}>
    //       {items.map((item, index) => {
    //           return (
    //             <div className="each-slide" key={item}>
    //               <div key={index} style={{ backgroundImage: `url(${item.image.url})` }} />
    //             </div>
    //           )
    //         }
    //       )}
    //     </Slide>
    //   </div>
    // </div>
  )
}

export default SlideShow