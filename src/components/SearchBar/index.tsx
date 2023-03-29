import { useEffect, useState } from 'react';
import styles from './index.module.scss';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storageInputValue = localStorage.getItem('INPUT_VALUE');
    if (storageInputValue) {
      setInputValue(storageInputValue);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('INPUT_VALUE', inputValue);
    };
  }, [inputValue]);

  return (
    <input
      type="search"
      name=""
      id=""
      value={inputValue}
      onChange={(el) => setInputValue(el.target.value)}
      placeholder="enter text"
      className={styles.searchBar}
    />
  );
}

export default SearchBar;
