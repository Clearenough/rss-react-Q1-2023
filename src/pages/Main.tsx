import { ICharacterCard } from '../@types/common';
import { useState } from 'react';
import CardsList from './../components/CardsList';
import SearchBar from './../components/SearchBar';

function MainPage() {
  const [cards, addCards] = useState<ICharacterCard[]>([]);
  console.log(cards);
  return (
    <>
      <SearchBar addCards={addCards} />
      <CardsList cards={cards} />
    </>
  );
}

export default MainPage;
