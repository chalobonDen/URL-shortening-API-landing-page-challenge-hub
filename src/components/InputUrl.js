import { memo, useState, createContext, useContext } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import './InputUrl.css';

const InputUrl = () => {
  const [linkContent, setLinkContent] = useState('');
  const [error, setError] = useState('');
  const [btnText, setBtnText] = useState('Shorten It!');
  const [multipleShortLinks, setMultipleShortLinks] = useState([]);
  const [copyState, setCopyState] = useState(true);

  const onLinkChange = (e) => {
    setLinkContent(e.target.value);
    setError('');
  };

  const handleShortLink = () => {
    // e.preventDefault();
    console.log(linkContent);
    if (!linkContent) {
      setError('Please add a link');
    } else if (
      !linkContent.includes('http') &&
      !linkContent.includes('https') &&
      !linkContent.includes('www')
    ) {
      setError('Please enter a valid URL');
    } else {
      getShortLink();
      setLinkContent('');
    }
  };

  const getShortLink = async () => {
    const longUrl = `https://api.shrtco.de/v2/shorten?url=${linkContent}`;
    const existingLink = multipleShortLinks.find(
      (shortLink) => shortLink['original_link'] === linkContent
    );
    if (!existingLink) {
      setBtnText('Shortening...');
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
    <main>
      <div className="main-shortlink">
        <div className="input-url">
          <div>
            <input
              type="text"
              value={linkContent}
              onChange={(event) => onLinkChange(event)}
              placeholder="Shorten a link here"
            />
            <button onClick={() => handleShortLink()}>Shorten it!</button>
          </div>
        </div>

        {multipleShortLinks.map((shortLink, index) => (
          <div key={index} className="link-url">
            <div className="link-left">
              <div className="full-link">{shortLink.original_link}</div>
            </div>
            <div className="link-right">
              <div className="short-link">{shortLink.short_link}</div>
              <button>Copy</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default InputUrl;
