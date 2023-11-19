import { Fragment, useRef, useEffect } from 'react';
import './styles/sass/main.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faGithub,
//   faLinkedin,
//   faCodepen,
// } from '@fortawesome/free-brands-svg-icons';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App = () => {
  const ref = useRef();

  useEffect(() => {
    document.body.classList.remove('is-preload');

    const preventTouchMove = () => false;
    window.ontouchmove = preventTouchMove;

    const resetScrollOnOrientationChange = () => {
      document.body.scrollTop = 0;
    };
    window.onorientationchange = resetScrollOnOrientationChange;

    return () => {
      window.ontouchmove = null;
      window.onorientationchange = null;
    };
  }, []);

  return (
    <Fragment>
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer offset={0} speed={1} factor={1}>
          <div id="wrapper">
            <div id="bg"></div>
            <div id="overlay"></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0, end: 0.3 }} speed={1}>
          <div id="main">
            {/* Header */}
            <header id="header">
              <h1>Kyle Starrett</h1>
              <p>Full-Stack Developer</p>
              <nav>
                <ul>
                  <li>
                    <a
                      href="https://www.github.com/kylestarrett1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon brands fa-github"
                    >
                      {/* <FontAwesomeIcon icon={faGithub} /> */}
                      <span className="label">Github</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kylestarrett/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon brands fa-linkedin"
                    >
                      {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://codepen.io/kylestarrett1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon brands fa-codepen"
                    >
                      {/* <FontAwesomeIcon icon={faCodepen} /> */}
                      <span className="label">Codepen</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} factor={0.25} speed={1}>
          {/* Footer */}
          <footer id="footer">
            <form action="" className="contact">
              <label htmlFor="name"></label>
              <input type="text" className="input name" />
              <label htmlFor="email"></label>
              <input type="email" className="input email" />
              <label htmlFor="message"></label>
              <input type="message" className="input message" />
            </form>
          </footer>
        </ParallaxLayer>
      </Parallax>
    </Fragment>
  );
};

export default App;
