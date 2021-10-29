import { useState } from 'react';
import './InputUrl.css';

const InputUrl = () => {
  const [linkContent, setLinkContent] = useState('');
  const [error, setError] = useState('');
  const [btnText, setBtnText] = useState('Shorten It!');
  const [multipleShortLinks, setMultipleShortLinks] = useState([]);

  const onClickCopy = (code) => {
    const newList = multipleShortLinks.map((val) => {
      if (val.code === code) {
        return {
          ...val,
          ...{ copy: false },
        };
      } else if (val.code !== code) {
        return {
          ...val,
          ...{ copy: true },
        };
      }
      return val;
    });
    setMultipleShortLinks(newList);
  };

  const onLinkChange = (e) => {
    setLinkContent(e.target.value);
    setError('');
  };

  const handleShortLink = () => {
    if (!linkContent) {
      setError('Please add a link');
      console.log('Please add a link');
      console.log(`error: ${error.length}`);
    } else if (
      !linkContent.includes('http') &&
      !linkContent.includes('https') &&
      !linkContent.includes('www')
    ) {
      setError('Please enter a valid URL');
      console.log('Please enter a valid URL');
      console.log(`error: ${error.length}`);
    } else {
      getShortLink();
      setLinkContent('');
      console.log(`error: ${error.length}`);
    }
  };

  const getShortLink = async () => {
    const longUrl = `https://api.shrtco.de/v2/shorten?url=${linkContent}`;
    const existingLink = multipleShortLinks.find(
      (shortLink) => shortLink['original_link'] === linkContent
    );
    if (!existingLink) {
      setBtnText('Loading...');
      const response = await fetch(longUrl);
      const fetchedShortUrl = await response.json();
      if (fetchedShortUrl.ok) {
        fetchedShortUrl.result['copy'] = true;
        const newShortLink = [...multipleShortLinks, fetchedShortUrl.result];
        setMultipleShortLinks(newShortLink);
      } else {
        setError('The short code API is unavailbale at the moment');
      }
      setBtnText('Shorten It!');
    } else {
      setError('You already have this link generated.');
    }
  };

  return (
    <main id="shortlink">
      <div className="main-shortlink">
        <div className={error.length === 0 ? 'input-url' : 'inputError'}>
          <div>
            <input
              type="text"
              value={linkContent}
              onChange={(event) => onLinkChange(event)}
              placeholder="Shorten a link here..."
            />
            <button onClick={() => handleShortLink()}>Shorten it!</button>
          </div>
          <p className="error-message">{error}</p>
        </div>
      </div>

      <div className="main-result">
        <div className="show-result">
          {multipleShortLinks.map((shortLink, index) => (
            <div key={index} className="link-url">
              <div className="link-left">
                <div className="full-link">{shortLink.original_link}</div>
              </div>
              <div className="link-right">
                <div className="short-link">{shortLink.short_link}</div>
                {shortLink.copy === false ? (
                  <button
                    className="btn-active-copy"
                    onClick={() =>
                      navigator.clipboard.writeText(shortLink.short_link) &&
                      onClickCopy(shortLink.code)
                    }
                  >
                    Copied!
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(shortLink.short_link) &&
                      onClickCopy(shortLink.code)
                    }
                  >
                    Copy
                  </button>
                )}
              </div>
              {/* {console.log(shortLink.short_link, copyState, index)} */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default InputUrl;
