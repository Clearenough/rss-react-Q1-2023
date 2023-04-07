import { APIResult, ICharacterCard } from '../../@types/common';
import React, { ReactEventHandler, useEffect, useState } from 'react';
import { fetchURL } from '../../utils/constants';
import styles from './index.module.scss';

interface IProps {
  addCards: (cards: ICharacterCard[]) => void;
  setError: (error: string) => void;
}

function SearchBar({ addCards, setError }: IProps) {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('rick');

  useEffect(() => {
    const storageInputValue = localStorage.getItem('INPUT_VALUE');
    if (storageInputValue) {
      setInputValue(storageInputValue);
      setSearchValue(storageInputValue);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('INPUT_VALUE', inputValue);
    };
  }, [inputValue]);

  useEffect(() => {
    (async function () {
      const res = fetchCharacter(searchValue);
      const data = await res;
      console.log(data);
      if (data.results) {
        addCards(data.results);
        setError('');
        return;
      }
      if (data.error) {
        addCards([]);
        setError(data.error);
        return;
      }
    })();
  }, [addCards, searchValue, setError]);

  async function fetchCharacter(name?: string): Promise<APIResult> {
    const response = await fetch(`${fetchURL}?name=${name}`);
    const data: APIResult = await response.json();
    return data;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchValue(inputValue);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        name=""
        id=""
        value={inputValue}
        onChange={(el) => setInputValue(el.target.value)}
        placeholder="enter text"
        className={styles.searchBar}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
