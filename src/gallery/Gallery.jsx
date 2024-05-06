import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import Natours from '../assets/images/Natours.png';
import Omni from '../assets/images/Omni-Consumer-Products.png';
import WebRTC from '../assets/images/WebRTC.png';
import Newsletter from '../assets/images/newsletter-img.png';

const images = [
  {
    name: 'Natours',
    image: Natours,
    url: 'https://starrett-kyle-natours.netlify.app/',
  },
  {
    name: 'Omni Consumer Products',
    image: Omni,
    url: 'https://starrett-omni-consumer-products.netlify.app/',
  },
  {
    name: 'Web RTC',
    image: WebRTC,
    url: 'https://github.com/kylestarrett1/WebRTC-RT-Chat',
  },
  {
    name: 'Summer Newsletter Template',
    image: Newsletter,
    url: 'https://starrett-summer-newsletter.netlify.app/',
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="gallery-main">
      <div className="gallery-container">
        <a onClick={goToPrevious} className="gallery-controls select-left">
          <FontAwesomeIcon
            className="icon carousel-control-icon"
            icon={faChevronLeft}
          />
        </a>

        <div
          id="image-track"
          data-mouse-down-at="0"
          data-preview-percentage="0"
        >
          <div className="imgContainer">
            <a
              href={images[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{images[currentIndex].name}</h2>
              <img
                className="image"
                src={images[currentIndex].image}
                alt={`Image ${currentIndex}`}
              />
            </a>
          </div>
        </div>

        <a onClick={goToNext} className="gallery-controls select-right">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="icon carousel-control-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Gallery;
