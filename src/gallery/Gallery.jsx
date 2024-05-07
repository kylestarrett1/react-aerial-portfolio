import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import Natours from '../assets/images/Natours__comp.jpg';
import Omni from '../assets/images/Omni-Consumer-Products__comp.jpg';
import WebRTC from '../assets/images/WebRTC.png';
import Newsletter from '../assets/images/newsletter-img.png';

const images = [
  {
    name: 'Natours',
    image: Natours,
    url: 'https://starrett-kyle-natours.netlify.app/',
    bio: "Explore. Discover. Conserve. Your gateway to immersive nature experiences worldwide, with eco-friendly tours and outdoor activities. Join us in preserving our planet's beauty for future generations.",
  },
  {
    name: 'Omni-Consumer-Products',
    image: Omni,
    url: 'https://starrett-omni-consumer-products.netlify.app/',
    bio: 'Nourish Your Lifestyle. Tailored healthy meals delivered to your doorstep based on your schedule, making eating well effortless and convenient.',
  },
  {
    name: 'Web RTC',
    image: WebRTC,
    url: 'https://github.com/kylestarrett1/WebRTC-RT-Chat',
    bio: 'Seamlessly connecting users worldwide, our platform offers crystal-clear video and audio quality, along with robust messaging capabilities, for effortless communication across devices. Join us and experience the future of real-time online interaction with ease and reliability.',
  },
  {
    name: 'Summer Newsletter Template',
    image: Newsletter,
    url: 'https://starrett-summer-newsletter.netlify.app/',
    bio: 'Elevate Your Newsletter Game: Unlock the Power of HTML5, CSS3, and Vanilla JavaScript with Our Dynamic Templates. Create Stunning, Responsive Campaigns Effortlessly and Stand Out in Every Inbox.',
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
            <h2 className="bio-heading">{images[currentIndex].name}</h2>
            <a
              href={images[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="image"
                src={images[currentIndex].image}
                alt={`Image ${currentIndex}`}
              />
            </a>
            <p className="bio-text">{images[currentIndex].bio}</p>
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
