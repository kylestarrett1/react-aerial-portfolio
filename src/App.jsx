import { Fragment, useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/sass/main.scss';

const App = () => {
  const [copiedText, setCopiedText] = useState('');
  const [isError, setIsError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showClipboardAnimation, setShowClipboardAnimation] = useState(false);

  const writeToMobileClipboard = async () => {
    try {
      let someAsyncMethod = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('this is text');
          }, 1000);
        });
      };

      const result = await someAsyncMethod()
        .then((result) => {
          console.log('Result:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      let copyText = '';
      if (!result) {
        copyText = '';
      } else {
        copyText = 'some string';
      }

      const clipboardItem = new ClipboardItem({
        'text/plain': new Blob([copyText], { type: 'text/plain' }),
      });

      await navigator.clipboard.write([clipboardItem]);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  const handleTouchStart = (event) => {
    event.preventDefault();

    if (navigator.clipboard && navigator.clipboard.write) {
      writeToMobileClipboard();
    } else {
      console.log(
        "Clipboard write not supported. Switching to 'copy-to-clipboard' library instead."
      );
      copy('kylestarrett1@gmail.com', {
        debug: true,
        message: 'Press #{key} to copy or select and copy',
      });
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText('email copied to clipboard');
        setIsCopied(!isCopied);
        setShowClipboardAnimation(true);
      })
      .catch((err) => {
        setIsError(true);
        setCopiedText('Could not copy to clipboard');
        setIsCopied(false);
        console.error('Could not copy to clipboard: ', err);
      });
  };

  const handleEmailClick = () => {
    const email = 'kylestarrett1@gmail.com';
    copyToClipboard(email);
  };

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
  }, [isError, isCopied]);

  return (
    <Fragment>
      <div id="wrapper">
        <div id="bg"></div>
        <div id="overlay"></div>
        <div id="main">
          <header id="header" tabIndex={0} aria-label="Portfolio">
            <h1 aria-label="Portfolio of Kyle Starrett" tabIndex={0}>
              Kyle Starrett
            </h1>
            <p aria-label="Job Description: Full-Stack Developer" tabIndex={0}>
              Full-Stack Developer
            </p>
            <nav tabIndex={0} aria-label="Portfolio">
              <ul>
                <li>
                  <a
                    href="https://www.github.com/kylestarrett1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon fa-icon brands"
                    aria-label="Kyle Starrett's Github profile"
                  >
                    <FontAwesomeIcon
                      className="fa-icon__child"
                      icon={faGithub}
                    />
                    <span className="label">Github</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/kylestarrett/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon fa-icon brands"
                    aria-label="Kyle Starrett's LinkedIn profile"
                  >
                    <FontAwesomeIcon
                      className="fa-icon__child"
                      icon={faLinkedin}
                    />
                    <span className="label">LinkedIn</span>
                  </a>
                </li>

                <li onTouchStart={handleTouchStart} onClick={handleEmailClick}>
                  <a
                    href="#!"
                    className="icon fa-icon solid"
                    aria-label="Email: kylestarrett1@gmail.com. Use enter to copy to clipboard."
                  >
                    <FontAwesomeIcon
                      className="fa-icon__child"
                      icon={faEnvelope}
                    />
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <footer id="footer"></footer>
        </div>
        {!isError && isCopied ? (
          <p className={`clipboard ${showClipboardAnimation ? 'animate' : ''}`}>
            {copiedText}
          </p>
        ) : (
          ''
        )}
      </div>
    </Fragment>
  );
};

export default App;
