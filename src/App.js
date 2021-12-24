import './App.css';
import Header from './components/Header';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import SearchBar from './components/SearchBar';
import { Spinner } from 'react-bootstrap';
import PaginationComponent from './components/PaginationComponent';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let query = '';
    if (!text) { query=`&limit=10&offset=${offset}`;}
    const fetchData = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${text}${query}`);

      setItems(res.data);
      setIsLoading(false)
    }
    fetchData();
  }, [text,offset])

  return (
    <div className="container">
      <Header />
      <SearchBar text={text} setText={setText}/>
      {isLoading ? <Spinner variant="light" /> : <CharacterGrid items={items} isLoading={isLoading} />}
      <PaginationComponent setOffset={setOffset}/>
    </div>
  );
}

export default App;
