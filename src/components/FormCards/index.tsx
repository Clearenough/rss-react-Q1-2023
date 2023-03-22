import { IFormCard } from './../../@types/common';
import React from 'react';
import FormCard from './../../components/FormCard';

interface IProps {
  cards: IFormCard[];
}

class FormCards extends React.Component<IProps, unknown> {
  render() {
    return (
      <div>
        {this.props.cards.map((card, index) => {
          return <FormCard {...card} key={index} />;
        })}
      </div>
    );
  }
}

export default FormCards;
