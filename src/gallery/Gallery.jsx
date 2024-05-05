import React, { useState } from 'react';

import Natours from '../assets/images/Natours.png';
import Omni from '../assets/images/Omni-Consumer-Products.png';
import WebRTC from '../assets/images/WebRTC.png';
import Newsletter from '../assets/images/newsletter-img.png';

const Gallery = () => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleOnDown = (e) => setMouseDownAt(e.clientX);

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const nextPercentageUnconstrained =
      prevPercentage + (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setPercentage(nextPercentage);

    const track = document.getElementById('image-track');
    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    const images = track.getElementsByClassName('image');
    for (const image of images) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  // Attach event listeners
  React.useEffect(() => {
    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', handleOnDown);
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', handleOnUp);
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', handleOnMove);

    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('touchstart', handleOnDown);
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', handleOnUp);
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', handleOnMove);
    };
  });

  return (
    <div id="gallery-main">
      <div className="gallery-container">
        <div
          id="image-track"
          data-mouse-down-at="0"
          data-preview-percentage="0"
        >
          <div className="imgContainer">
            <a
              href="https://starrett-kyle-natours.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Natours</h2>
            </a>
            <img className="image" src={Natours} draggable="false" />
          </div>

          <div className="imgContainer">
            <a
              href="https://starrett-omni-consumer-products.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Omni Consumer Products</h2>
            </a>
            <img className="image" src={Omni} draggable="false" />
          </div>

          <div className="imgContainer">
            <a
              href="https://github.com/kylestarrett1/WebRTC-RT-Chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>WebRTC Chat</h2>
            </a>
            <img className="image" src={WebRTC} draggable="false" />
          </div>

          <div className="imgContainer">
            <a
              className="newsletter"
              href="https://starrett-summer-newsletter.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Newsletter Template</h2>
            </a>
            <img className="image" src={Newsletter} draggable="false" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
