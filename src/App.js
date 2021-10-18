import './App.css';
import { memo, useState, createContext, useContext } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryCilent = new QueryClient();

const UrlContext = createContext();

function UrlProvider({ children }) {
  const [url, setUrl] = useState('https://www.frontendmentor.io/');

  return (
    <QueryClientProvider client={queryCilent}>
      <UrlContext.Provider value={{ url, setUrl }}>
        {children}
      </UrlContext.Provider>
    </QueryClientProvider>
  );
}

const UrlContent = () => {
  return (
    <div className="App">
      <URLinput />
      <UrlResult />
    </div>
  );
};

function App() {
  return (
    <UrlProvider>
      <UrlContent></UrlContent>
    </UrlProvider>
  );
}

// Component
const URLinput = () => {
  const { url, setUrl } = useContext(UrlContext);

  return (
    <select value={url} onChange={(event) => setUrl(event.target.value)}>
      <option value="https://www.frontendmentor.io/">frontendmentor</option>
      <option value="https://www.youtube.com/">youtube</option>
      <option value="https://www.twitter.com/">twitter</option>
    </select>
  );
};

async function fetchUrl({ queryKey }) {
  const response = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${queryKey}`
  );
  const data = await response.json();
  return data;
}

const UrlResult = () => {
  const { url } = useContext(UrlContext);
  const { data, isLoading, error } = useQuery(url, fetchUrl);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops!! error occurred...</p>;

  return (
    <div>
      <h1> {data.result.full_short_link} </h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <div className="row">
        {data.message.map((val, index) => (
          <img key={index} src={val} />
        ))}
      </div> */}

      {console.log(data.result.full_short_link)}
    </div>
  );
};

export default App;
