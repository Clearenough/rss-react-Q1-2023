import { ICharacterCard } from '../@types/common';
import { useState } from 'react';
import CardsList from './../components/CardsList';
import SearchBar from './../components/SearchBar';

function MainPage() {
  const [cards, addCards] = useState<ICharacterCard[]>([]);
  const [error, setError] = useState('');
  console.log(cards);
  return (
    <>
      <SearchBar addCards={addCards} setError={setError} />
      <CardsList cards={cards} error={error} />
    </>
  );
}

export default MainPage;
