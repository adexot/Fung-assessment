import React, { useState, useEffect } from "react";
import "./App.css";
import { getMarvelHash } from "./lib/util";

const apiKey = "0b480d29e79d5854037367ce5de6ece4";

// Hook
function useDebounce(value: string, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

function App() {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<any>([]);
  const debouncedSearchTerm = useDebounce(searchText, 500);

  useEffect(() => {
    const ts = new Date().getTime().toString();
    const hash = getMarvelHash(ts, apiKey);

    if (!searchText) return;
    if (debouncedSearchTerm) {
      fetch(`https://gateway.marvel.com/v1/public/comics?ts=${ts}&hash=${hash}&apikey=${apiKey}&titleStartsWith=${debouncedSearchTerm}`)
        .then(res => {
          if (!res.ok) {
            throw Error('error')
          }

          return res.json();
        })
        .then((res: any) => {
          const results = res.data.results;
          setData(results);
        })
        .catch(e => console.error(e))
    }

  }, [debouncedSearchTerm])

  return (
    <div className="App">
      <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
      <ul>
        {data.map((element: any) => (
          <Card elem={element} />
        ))}
      </ul>
    </div>
  );
}

function Card({ elem }: { elem: any }) {
  const { title, thumbnail, stories, characters, resourceURI } = elem;

  return (
    <li>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
      <p>Title: <a href={resourceURI}>{title}</a></p>
      <Collection title='Stories' data={stories.items} />
      <Collection title='Characters' data={characters.items} />
    </li>
  )
}

function Collection({ data, title }: any) {
  return (
    <>
      <p>{title}</p>
      <ul>
        {data.map((story: any) => (<li><a href={story.resourceURI}>{story.name}</a></li>))}
      </ul>
    </>
  )
}

export default App;
