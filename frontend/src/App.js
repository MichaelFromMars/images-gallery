import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Seach from './components/Search';

const App = () => {
  const [word, setSearchWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

  return (
    <div>
      <Header title="Images Gallery" />
      <Seach word={word} setWord={setSearchWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
