import { IFormCard } from './../../@types/common';
import React from 'react';
import FormCard from './../../components/FormCard';
import styles from './index.module.scss';

interface IProps {
  cards: IFormCard[];
}

class FormCards extends React.Component<IProps, unknown> {
  render() {
    return (
      <div className={styles.cards}>
        {this.props.cards.map((card, index) => {
          return <FormCard {...card} key={index} />;
        })}
      </div>
    );
  }
}

export default FormCards;
