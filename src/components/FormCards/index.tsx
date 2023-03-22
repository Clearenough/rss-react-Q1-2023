import { IFormCard } from './../../@types/common';
import React from 'react';
import FormCard from './../../components/FormCard';

interface IProps {
  card: IFormCard;
}

interface IState {
  cards: IFormCard[];
}

class FormCards extends React.Component<IProps, IState> {
  // state: IState = { cards: [] };

  // addCard = (card: IFormCard) => {
  //   const newCardsArray = { ...this.state.cards };
  //   newCardsArray.push(card);
  //   this.setState({ cards: newCardsArray });
  // };

  render() {
    return (
      <div>
        {this.state.cards.map((card, index) => {
          return <FormCard {...card} key={index} />;
        })}
      </div>
    );
  }
}

export default FormCards;
